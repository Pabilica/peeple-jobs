'use client';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { createJob } from "@/lib/api/jobs";
import { getCompany } from "@/lib/api/companies";
import { createClient } from "@/lib/supabase/client";
// import { toast } from "sonner"; // Removed as it might be missing
// Just using alert/console as per previous code to be safe.

const jobFormSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters."),
    location: z.string().min(2, "Location is required."),
    salaryMin: z.string().optional(),
    salaryMax: z.string().optional(),
    description: z.string().min(10, "Description must be at least 10 characters."),
    visaE7: z.boolean(),
    visaF2: z.boolean(),
    visaF5: z.boolean(),
});

export default function JobPostingPage() {
    const router = useRouter();
    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            title: "",
            location: "",
            description: "",
            salaryMin: "",
            salaryMax: "",
            visaE7: false,
            visaF2: false,
            visaF5: false,
        },
    });

    async function onSubmit(values: z.infer<typeof jobFormSchema>) {
        try {
            console.log("Submitting...", values);
            const supabase = createClient();

            // 1. Get Current User
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                alert("Please log in to post a job.");
                router.push('/login');
                return;
            }

            // 2. Get Company Profile
            const company = await getCompany(user.id);
            if (!company) {
                alert("Company profile not found. Please complete onboarding.");
                // router.push('/onboarding/company'); 
                return;
            }

            // 3. Prepare Job Data
            const jobData = {
                company_id: company.id,
                title: values.title,
                location: values.location,
                description: `${values.description}\n\nVisa Requirements: ${[values.visaE7 && 'E-7', values.visaF2 && 'F-2', values.visaF5 && 'F-5'].filter(Boolean).join(', ')}`,
                salary_min: values.salaryMin ? parseInt(values.salaryMin) : null,
                salary_max: values.salaryMax ? parseInt(values.salaryMax) : null,
                status: 'active' as const,
                visa_sponsorship: values.visaE7 || values.visaF2 || values.visaF5,
                employment_type: 'full-time', // Default for now, could be field
                currency: 'KRW'
            };

            // 4. Create Job
            await createJob(jobData);

            alert("Job Posted Successfully!");
            router.push("/company/jobs");
            router.refresh(); // Refresh server components
        } catch (error) {
            console.error("Error posting job:", error);
            alert("Failed to post job. See console.");
        }
    }

    return (
        <div className="container py-8 px-4 md:px-6 max-w-2xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Post a Job</h1>
                <p className="text-muted-foreground">
                    Create a new job opportunity for global talent.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Senior Frontend Developer" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="salaryMin"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Min Salary (Annual, KRW)</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="30000000" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="salaryMax"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Max Salary</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="50000000" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Gangnam-gu, Seoul" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe the role, responsibilities, and requirements..."
                                                className="min-h-[150px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-3">
                                <FormLabel>Visa Sponsorship</FormLabel>
                                <div className="flex flex-wrap gap-4">
                                    <FormField
                                        control={form.control}
                                        name="visaE7"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-sm">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>E-7 (Special Occupation)</FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="visaF2"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-sm">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>F-2 (Resident)</FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="visaF5"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-sm">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>F-5 (Permanent)</FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormDescription>
                                    Select the visa types you are willing to sponsor or accept.
                                </FormDescription>
                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
                                <Button type="submit">Post Job</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
