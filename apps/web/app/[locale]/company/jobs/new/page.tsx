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

const jobFormSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters."),
    location: z.string().min(2, "Location is required."),
    salaryMin: z.string().optional(), // Treat as string for input, convert later
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

    function onSubmit(values: z.infer<typeof jobFormSchema>) {
        console.log(values);
        // Mock API call
        alert("Job Posted Successfully! (Mock)");
        router.push("/company/jobs");
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
                                            <FormLabel>Max Salary (Optional)</FormLabel>
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
