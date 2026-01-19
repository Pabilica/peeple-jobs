"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function JobSearch() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search jobs, skill, or company..." className="pl-9" />
            </div>
            <Button type="submit">Search</Button>
        </div>
    );
}
