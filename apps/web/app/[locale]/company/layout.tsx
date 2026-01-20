import { CompanyHeader } from '@/app/components/CompanyHeader';
import { CompanySidebar } from '@/app/components/CompanySidebar';
import React from 'react';

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-800 dark:text-slate-100">
            <div className="flex h-screen w-full overflow-hidden">
                <CompanySidebar />
                <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                    <CompanyHeader />
                    <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-background-light dark:bg-background-dark">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
