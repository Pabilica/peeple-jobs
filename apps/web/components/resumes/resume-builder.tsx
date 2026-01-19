'use client';

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Save, ArrowLeft, ArrowRight, Download } from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { createClient } from "@/lib/supabase/client";

// --- Types & Schema ---

const resumeSchema = z.object({
    personalInfo: z.object({
        fullName: z.string().min(2, "Name is required"),
        email: z.string().email(),
        phone: z.string().optional(),
        location: z.string().optional(),
        website: z.string().optional(),
        summary: z.string().optional(),
    }),
    experience: z.array(z.object({
        company: z.string().min(1, "Company is required"),
        position: z.string().min(1, "Position is required"),
        startDate: z.string().min(1, "Start Date is required"),
        endDate: z.string().optional(),
        current: z.boolean().optional(), // Changed to optional to avoid resolver issues
        description: z.string().optional(),
    })),
    education: z.array(z.object({
        school: z.string().min(1, "School is required"),
        degree: z.string().min(1, "Degree is required"),
        year: z.string().optional(),
    })),
    skills: z.string().optional(), // Comma separated for simplicity
});

type ResumeData = z.infer<typeof resumeSchema>;

export function ResumeBuilder() {
    const [step, setStep] = useState(1);
    const [generating, setGenerating] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    const form = useForm<ResumeData>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            personalInfo: { fullName: "", email: "", phone: "", location: "", website: "", summary: "" },
            experience: [], // Start empty or with one empty object
            education: [],
            skills: ""
        }
    });

    const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({
        control: form.control,
        name: "experience"
    });

    const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({
        control: form.control,
        name: "education"
    });

    const nextStep = async () => {
        // Validate current step fields if needed
        // For now, simpler navigation
        setStep(prev => Math.min(prev + 1, 4));
    };

    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const generatePDF = async () => {
        if (!resumeRef.current) return;
        setGenerating(true);
        try {
            const canvas = await html2canvas(resumeRef.current, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

            // 1. Download Locally
            const fileName = `${form.getValues().personalInfo.fullName || 'Resume'}.pdf`;
            pdf.save(fileName);

            // 2. Upload to Supabase
            const pdfBlob = pdf.output('blob');
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                const storagePath = `${user.id}/${Date.now()}_resume.pdf`;
                const { error: uploadError } = await supabase.storage
                    .from('resumes')
                    .upload(storagePath, pdfBlob, {
                        contentType: 'application/pdf',
                        upsert: true
                    });

                if (uploadError) {
                    console.error("Storage upload error:", uploadError);
                } else {
                    const { data: { publicUrl } } = supabase.storage.from('resumes').getPublicUrl(storagePath);

                    const { error: dbError } = await supabase.from('resumes').insert({
                        user_id: user.id,
                        title: fileName,
                        file_url: publicUrl,
                        is_primary: true
                    });

                    if (dbError) console.error("DB save error:", dbError);
                    else alert("Resume saved to your profile!");
                }
            }

        } catch (error) {
            console.error("PDF Generation failed:", error);
            alert("Failed to generate PDF");
        } finally {
            setGenerating(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Form */}
            <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Step {step} of 4</h2>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={prevStep} disabled={step === 1}>
                            <ArrowLeft className="w-4 h-4 mr-1" /> Back
                        </Button>
                        {step < 4 ? (
                            <Button size="sm" onClick={nextStep}>
                                Next <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        ) : (
                            <Button size="sm" onClick={generatePDF} disabled={generating}>
                                {generating ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : <Download className="w-4 h-4 mr-1" />}
                                Download PDF
                            </Button>
                        )}
                    </div>
                </div>

                <Form {...form}>
                    <form className="space-y-6">
                        {step === 1 && (
                            <Card>
                                <CardHeader><CardTitle>Personal Info</CardTitle></CardHeader>
                                <CardContent className="space-y-4">
                                    <FormField control={form.control} name="personalInfo.fullName" render={({ field }) => (
                                        <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <FormField control={form.control} name="personalInfo.email" render={({ field }) => (
                                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <FormField control={form.control} name="personalInfo.phone" render={({ field }) => (
                                        <FormItem><FormLabel>Phone</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <FormField control={form.control} name="personalInfo.location" render={({ field }) => (
                                        <FormItem><FormLabel>Location</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <FormField control={form.control} name="personalInfo.summary" render={({ field }) => (
                                        <FormItem><FormLabel>Professional Summary</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                </CardContent>
                            </Card>
                        )}

                        {step === 2 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Experience</CardTitle>
                                    <Button type="button" variant="outline" size="sm" onClick={() => appendExp({ company: "", position: "", startDate: "", current: false })}>+ Add</Button>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {expFields.map((field, index) => (
                                        <div key={field.id} className="p-4 border rounded-lg relative space-y-4">
                                            <Button type="button" variant="ghost" size="sm" className="absolute top-2 right-2 text-destructive" onClick={() => removeExp(index)}>Remove</Button>
                                            <div className="grid grid-cols-2 gap-4">
                                                <FormField control={form.control} name={`experience.${index}.position`} render={({ field }) => (
                                                    <FormItem><FormLabel>Position</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                                                )} />
                                                <FormField control={form.control} name={`experience.${index}.company`} render={({ field }) => (
                                                    <FormItem><FormLabel>Company</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                                                )} />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <FormField control={form.control} name={`experience.${index}.startDate`} render={({ field }) => (
                                                    <FormItem><FormLabel>Start Date</FormLabel><FormControl><Input placeholder="YYYY-MM" {...field} /></FormControl></FormItem>
                                                )} />
                                                <FormField control={form.control} name={`experience.${index}.endDate`} render={({ field }) => (
                                                    <FormItem><FormLabel>End Date</FormLabel><FormControl><Input placeholder="Present" {...field} /></FormControl></FormItem>
                                                )} />
                                            </div>

                                            <FormField control={form.control} name={`experience.${index}.description`} render={({ field }) => (
                                                <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl></FormItem>
                                            )} />
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        )}

                        {step === 3 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Education</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {eduFields.map((field, index) => (
                                        <div key={field.id} className="p-4 border rounded-lg relative space-y-4">
                                            <Button type="button" variant="ghost" size="sm" className="absolute top-2 right-2 text-destructive" onClick={() => removeEdu(index)}>Remove</Button>
                                            <FormField control={form.control} name={`education.${index}.school`} render={({ field }) => (
                                                <FormItem><FormLabel>School/University</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                                            )} />
                                            <div className="grid grid-cols-2 gap-4">
                                                <FormField control={form.control} name={`education.${index}.degree`} render={({ field }) => (
                                                    <FormItem><FormLabel>Degree</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                                                )} />
                                                <FormField control={form.control} name={`education.${index}.year`} render={({ field }) => (
                                                    <FormItem><FormLabel>Graduation Year</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    ))}
                                    <Button type="button" variant="outline" size="sm" onClick={() => appendEdu({ school: "", degree: "" })}>+ Add Education</Button>
                                </CardContent>
                            </Card>
                        )}

                        {step === 4 && (
                            <Card>
                                <CardHeader><CardTitle>Skills & Finalize</CardTitle></CardHeader>
                                <CardContent className="space-y-4">
                                    <FormField control={form.control} name="skills" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Skills (Comma separated)</FormLabel>
                                            <FormControl><Textarea placeholder="React, TypeScript, Node.js..." {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                </CardContent>
                            </Card>
                        )}
                    </form>
                </Form>
            </div>

            {/* Right: Preview */}
            <div className="hidden lg:block sticky top-20 h-[800px] overflow-y-auto border bg-white shadow-lg p-8" ref={resumeRef}>
                <ResumePreview data={form.watch()} />
            </div>
        </div>
    );
}

function ResumePreview({ data }: { data: ResumeData }) {
    return (
        <div className="space-y-6 text-sm">
            <div className="border-b pb-4">
                <h1 className="text-3xl font-bold uppercase tracking-wider text-gray-900">{data.personalInfo.fullName || "Your Name"}</h1>
                <div className="mt-2 text-gray-600 flex flex-wrap gap-4">
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>• {data.personalInfo.phone}</span>}
                    {data.personalInfo.location && <span>• {data.personalInfo.location}</span>}
                </div>
            </div>

            {data.personalInfo.summary && (
                <div>
                    <h3 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase text-gray-700">Summary</h3>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">{data.personalInfo.summary}</p>
                </div>
            )}

            {data.experience.some(e => e.company) && (
                <div>
                    <h3 className="text-lg font-bold border-b border-gray-300 mb-3 uppercase text-gray-700">Experience</h3>
                    <div className="space-y-4">
                        {data.experience.map((exp, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-gray-900">{exp.position}</h4>
                                    <span className="text-gray-500 font-medium">
                                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                    </span>
                                </div>
                                <div className="text-primary-600 font-semibold mb-1">{exp.company}</div>
                                <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {data.education.some(e => e.school) && (
                <div>
                    <h3 className="text-lg font-bold border-b border-gray-300 mb-3 uppercase text-gray-700">Education</h3>
                    <div className="space-y-3">
                        {data.education.map((edu, i) => (
                            <div key={i}>
                                <div className="flex justify-between">
                                    <h4 className="font-bold text-gray-900">{edu.school}</h4>
                                    <span className="text-gray-500">{edu.year}</span>
                                </div>
                                <div>{edu.degree}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {data.skills && (
                <div>
                    <h3 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase text-gray-700">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.split(',').map((skill, i) => (
                            <span key={i} className="bg-gray-100 px-2 py-1 rounded text-gray-700 font-medium">
                                {skill.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
