"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ApplicationStatusBadge } from "./status-badge";
import Link from "next/link";
import { CalendarDays, MapPin, Building2, Trash2 } from "lucide-react";
import { withdrawApplication } from "@/lib/actions/applications";
import { useState, useTransition } from "react";
// import { useToast } from "@/components/ui/use-toast"; // assuming simpler alert for now to avoid dependency issues

export function ApplicationCard({ app }: { app: any }) {
    const [isPending, startTransition] = useTransition();

    // Simple alert-based confirm for now if no toast/dialog
    const handleWithdraw = async () => {
        if (!confirm("Are you sure you want to withdraw this application? This action cannot be undone.")) return;

        startTransition(async () => {
            try {
                await withdrawApplication(app.id);
            } catch (error) {
                alert("Failed to withdraw application");
            }
        });
    };

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="space-y-2">
                        <div className="flex items-start justify-between md:justify-start gap-4">
                            <h3 className="text-xl font-semibold hover:underline">
                                <Link href={`/jobs/${app.jobs.id}`}>
                                    {app.jobs.title}
                                </Link>
                            </h3>
                            <ApplicationStatusBadge status={app.status} />
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Building2 className="h-4 w-4" />
                                <span>{app.jobs.companies?.name || "Unknown Company"}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{app.jobs.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CalendarDays className="h-4 w-4" />
                                <span>Applied on {new Date(app.created_at).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        {app.status === 'pending' && (
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={handleWithdraw}
                                disabled={isPending}
                            >
                                <Trash2 className="h-4 w-4 mr-2" />
                                {isPending ? "Withdrawing..." : "Withdraw"}
                            </Button>
                        )}
                        <Button variant="outline" size="sm" asChild>
                            <Link href={`/jobs/${app.jobs.id}`}>View Job</Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
