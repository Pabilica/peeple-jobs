import Link from "next/link";
import { JobPosting } from "@repo/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Banknote, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

interface JobCardProps {
    job: JobPosting;
    locale: string;
}

export function JobCard({ job, locale }: JobCardProps) {
    // const t = useTranslations('Jobs'); // TODO: Add translations

    // Format salary
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
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <div>
                        <Link href={`/jobs/${job.id}`} className="hover:underline">
                            <h3 className="text-xl font-semibold mb-1">
                                {locale === 'ko' ? job.title : (job.titleEn || job.title)}
                            </h3>
                        </Link>
                        <div className="flex items-center text-muted-foreground text-sm">
                            <Building2 className="w-4 h-4 mr-1" />
                            <span>{locale === 'ko' ? job.company?.companyName : (job.company?.companyNameEn || job.company?.companyName || "Unknown")}</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {job.jobType === 'full_time' && (
                            <Badge variant="secondary">Full Time</Badge>
                        )}
                        {job.jobType === 'part_time' && (
                            <Badge variant="outline">Part Time</Badge>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pb-3 text-sm space-y-2">
                <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                    <Banknote className="w-4 h-4 mr-2" />
                    <span>{formatSalary(job.salaryMin, job.salaryMax)}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                    {job.visaRequirements?.map(visa => (
                        <Badge key={visa} variant="outline" className="text-xs">
                            {visa}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="pt-3 border-t flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{new Date(job.createdAt).toLocaleDateString()}</span>
                </div>
                <Link href={`/jobs/${job.id}`}>
                    <Button variant="ghost" size="sm">
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
