"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function JobFilter() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Filters</CardTitle>
                        <Button variant="link" className="text-sm h-auto p-0 text-muted-foreground">Reset</Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Visa Type */}
                    <div className="space-y-2">
                        <h4 className="font-medium text-sm">Visa Support</h4>
                        <div className="space-y-2">
                            {['E-7', 'E-9', 'F-2', 'D-10'].map((type) => (
                                <div key={type} className="flex items-center space-x-2">
                                    <input type="checkbox" id={`visa-${type}`} className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                    <Label htmlFor={`visa-${type}`} className="font-normal">{type}</Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Job Type */}
                    <div className="space-y-2">
                        <h4 className="font-medium text-sm">Job Type</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="type-full" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                <Label htmlFor="type-full" className="font-normal">Full Time</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="type-part" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                <Label htmlFor="type-part" className="font-normal">Part Time</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="type-intern" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                <Label htmlFor="type-intern" className="font-normal">Internship</Label>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <h4 className="font-medium text-sm">Location</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="loc-seoul" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                <Label htmlFor="loc-seoul" className="font-normal">Seoul</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="loc-gyeonggi" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                <Label htmlFor="loc-gyeonggi" className="font-normal">Gyeonggi-do</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="loc-incheon" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                <Label htmlFor="loc-incheon" className="font-normal">Incheon</Label>
                            </div>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
