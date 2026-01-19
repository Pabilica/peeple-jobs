import { MOCK_JOBS } from "@/lib/mock/jobs";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Banknote, Clock, ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

interface Props {
    params: Promise<{ id: string; locale: string }>;
}

export default async function JobDetailPage({ params }: Props) {
    const { id, locale } = await params;
    const job = MOCK_JOBS.find((j) => j.id === id);

    if (!job) {
        notFound();
    }

    const formatSalary = (min: number | undefined, max: number | undefined) => {
        if (min === undefined) return "Negotiable";

        const formatter = new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'ko-KR', {
            style: 'currency',
            currency: 'KRW',
            maximumFractionDigits: 0
        });

        if (max) {
            return `${formatter.format(min)} - ${formatter.format(max)}`;
        }
        return `${formatter.format(min)}+`;
    };

    return (
        <div className="container py-10 px-4 md:px-6 max-w-5xl">
            {/* Back Link */}
            <div className="mb-6">
                <Link href="/jobs" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Jobs
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Header */}
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">
                            {locale === 'ko' ? job.title : (job.titleEn || job.title)}
                        </h1>
                        <div className="flex items-center text-lg text-muted-foreground mb-4">
                            <Building2 className="mr-2 h-5 w-5" />
                            <span className="font-medium">
                                {locale === 'ko' ? job.company?.companyName : (job.company?.companyNameEn || job.company?.companyName || "Unknown Company")}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {job.jobType === 'full_time' && <Badge variant="secondary">Full Time</Badge>}
                            {job.visaRequirements?.map(visa => (
                                <Badge key={visa} variant="outline">{visa}</Badge>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Job Description</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="whitespace-pre-line text-muted-foreground">
                                {job.description}
                            </p>

                            <div className="pt-4">
                                <h3 className="font-semibold mb-2">Required Languages</h3>
                                <div className="flex gap-2">
                                    {job.requiredLanguages?.map(lang => (
                                        <Badge key={lang} variant="secondary" className="uppercase">{lang}</Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <Button className="w-full text-lg py-6 shadow-lg">
                                Apply Now
                            </Button>
                            <Button variant="outline" className="w-full">
                                Save Job
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Job Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="flex items-start">
                                <Banknote className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                                <div>
                                    <span className="block font-medium">Salary</span>
                                    <span className="text-muted-foreground">{formatSalary(job.salaryMin, job.salaryMax)}</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                                <div>
                                    <span className="block font-medium">Location</span>
                                    <span className="text-muted-foreground">{job.location}</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Globe className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                                <div>
                                    <span className="block font-medium">Industry</span>
                                    <span className="text-muted-foreground">{job.company?.industry || "N/A"}</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                                <div>
                                    <span className="block font-medium">Posted</span>
                                    <span className="text-muted-foreground">{new Date(job.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">About Company</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                            <p>{job.company?.description || "No description available."}</p>
                            {job.companyId && (
                                <Link href={`/companies/${job.companyId}`} className="text-primary hover:underline block mt-2">
                                    View Company Profile
                                </Link>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
