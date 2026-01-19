'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { createClient } from "@/lib/supabase/client";
// import { toast } from "sonner"; // If available, else alert
import { applyToJob } from "@/lib/api/applications"; // We will update this to handle upload
import { UploadCloud } from "lucide-react";

// Schema
const applicationSchema = z.object({
    coverLetter: z.string().min(10, "Cover letter must be at least 10 characters."),
    resume: z.any()
    // .refine((file) => file?.length === 1, "Resume is required.")
    // .refine((file) => file?.[0]?.size <= 5000000, "Max file size is 5MB.")
    // .refine((file) => ['application/pdf'].includes(file?.[0]?.type), "Only .pdf formats are supported.")
    // Simplification for now, we'll handle file manually or via controlled input
});

interface Props {
    jobId: string;
    jobTitle: string;
    trigger?: React.ReactNode;
}

export function ApplicationDialog({ jobId, jobTitle, trigger }: Props) {
    const [open, setOpen] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const form = useForm<z.infer<typeof applicationSchema>>({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            coverLetter: "",
        },
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    async function onSubmit(values: z.infer<typeof applicationSchema>) {
        if (!selectedFile) {
            alert("Please upload a resume (PDF).");
            return;
        }

        try {
            setUploading(true);
            const supabase = createClient();

            // 1. Check Auth
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                alert("You must be logged in to apply.");
                return;
            }

            // 2. Upload Resume
            const fileExt = selectedFile.name.split('.').pop();
            const fileName = `${user.id}/${Date.now()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage
                .from('resumes')
                .upload(fileName, selectedFile);

            if (uploadError) {
                throw new Error(`Upload failed: ${uploadError.message}`);
            }

            // 3. Get Public URL (or keep private and use signed URLs later)
            // For simplicity, assuming public bucket or we store the path
            const resumeUrl = fileName; // Storing path for now

            // 4. Create Application
            await applyToJob({
                job_id: jobId,
                applicant_id: user.id,
                cover_letter: values.coverLetter,
                resume_url: resumeUrl
            });

            alert("Application submitted successfully!");
            setOpen(false);
            form.reset();
            setSelectedFile(null);


        } catch (error: any) {
            console.error("Application Error:", error);
            alert(`Failed to apply: ${error.message}`);
        } finally {
            setUploading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || <Button size="lg" className="w-full">Apply Now</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Apply for {jobTitle}</DialogTitle>
                    <DialogDescription>
                        Submit your application. Expected response time: 2-3 days.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        {/* Resume Upload */}
                        <div className="space-y-2">
                            <Label htmlFor="resume">Resume (PDF)</Label>
                            <div className="flex items-center gap-4">
                                <Input
                                    id="resume"
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="cursor-pointer"
                                />
                            </div>
                            {selectedFile && (
                                <p className="text-sm text-muted-foreground flex items-center">
                                    <UploadCloud className="w-4 h-4 mr-1" />
                                    {selectedFile.name}
                                </p>
                            )}
                        </div>

                        {/* Cover Letter */}
                        <FormField
                            control={form.control}
                            name="coverLetter"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cover Letter</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Introduce yourself and explain why you're a good fit..."
                                            className="min-h-[150px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={uploading}>
                                {uploading ? "Submitting..." : "Submit Application"}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
