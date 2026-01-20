'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock Applicants Data
const MOCK_APPLICANTS = [
    { id: 'app-1', name: 'John Doe', role: 'Frontend Engineer', stage: 'Applied', date: '2 hrs ago', avatar: 'J', status: 'normal' },
    { id: 'app-2', name: 'Alice Smith', role: 'Frontend Engineer', stage: 'Reviewing', date: '1 day ago', avatar: 'A', status: 'good' },
    { id: 'app-3', name: 'Robert Kim', role: 'Product Designer', stage: 'Applied', date: '3 hrs ago', avatar: 'R', status: 'normal' },
    { id: 'app-4', name: 'Sarah Lee', role: 'Backend Developer', stage: 'Interview', date: '2 days ago', avatar: 'S', status: 'interview_scheduled' },
    { id: 'app-5', name: 'Mike Chen', role: 'Frontend Engineer', stage: 'Offer', date: '1 week ago', avatar: 'M', status: 'offer_sent' },
];

const STAGES = ['Applied', 'Reviewing', 'Interview', 'Offer', 'Rejected'];

export default function ApplicantsPage() {
    const [applicants, setApplicants] = useState(MOCK_APPLICANTS);
    const [draggedItem, setDraggedItem] = useState<string | null>(null);
    const [selectedApplicant, setSelectedApplicant] = useState<any>(null); // For modal

    // Drag & Drop Handlers (Simplified)
    const handleDragStart = (e: React.DragEvent, id: string) => {
        setDraggedItem(id);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, targetStage: string) => {
        e.preventDefault();
        if (draggedItem) {
            setApplicants(prev => prev.map(app =>
                app.id === draggedItem ? { ...app, stage: targetStage } : app
            ));
            setDraggedItem(null);
        }
    };

    // Action Handlers
    const handleScheduleInterview = (applicant: any) => {
        const date = prompt(`Schedule interview for ${applicant.name}. Enter date (YYYY-MM-DD):`, new Date().toISOString().split('T')[0]);
        if (date) {
            alert(`Interview scheduled for ${applicant.name} on ${date}!`);
            setApplicants(prev => prev.map(app =>
                app.id === applicant.id ? { ...app, stage: 'Interview', status: 'interview_scheduled' } : app
            ));
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-black min-h-screen font-display flex flex-col">
            {/* Header */}
            <header className="bg-white dark:bg-[#1e1e1e] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/company/dashboard" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-500">arrow_back</span>
                        <span className="font-bold text-slate-900 dark:text-white">Back to Dashboard</span>
                    </Link>
                    <h1 className="text-lg font-bold text-slate-900 dark:text-white">Applicant Management</h1>
                    <div className="w-8"></div> {/* Spacer */}
                </div>
            </header>

            <main className="flex-grow overflow-x-auto p-6">
                <div className="flex gap-6 min-w-max h-full">
                    {STAGES.map((stage) => (
                        <div
                            key={stage}
                            className="w-80 flex flex-col bg-slate-100 dark:bg-[#1e1e1e] rounded-2xl border border-slate-200 dark:border-slate-800 h-full max-h-[calc(100vh-140px)]"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, stage)}
                        >
                            {/* Column Header */}
                            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-inherit rounded-t-2xl z-10">
                                <h3 className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    {stage}
                                    <span className="bg-slate-200 dark:bg-slate-700 text-xs px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-300">
                                        {applicants.filter(a => a.stage === stage).length}
                                    </span>
                                </h3>
                            </div>

                            {/* Cards */}
                            <div className="p-3 flex-grow overflow-y-auto space-y-3">
                                {applicants.filter(a => a.stage === stage).map((app) => (
                                    <div
                                        key={app.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, app.id)}
                                        className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow group relative"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                                                    {app.avatar}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{app.name}</h4>
                                                    <p className="text-xs text-slate-500">{app.role}</p>
                                                </div>
                                            </div>
                                            <button
                                                className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                                onClick={() => setSelectedApplicant(app)} // Mock open detail
                                            >
                                                <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                                            </button>
                                        </div>

                                        <div className="text-xs text-slate-400 mt-2 flex items-center justify-between">
                                            <span>{app.date}</span>
                                            {/* Quick Actions */}
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                                <button
                                                    title="Schedule Interview"
                                                    onClick={() => handleScheduleInterview(app)}
                                                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-blue-500"
                                                >
                                                    <span className="material-symbols-outlined text-[16px]">calendar_add_on</span>
                                                </button>
                                                <button
                                                    title="View Profile"
                                                    onClick={() => alert(`Viewing profile of ${app.name}`)}
                                                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500"
                                                >
                                                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                                                </button>
                                            </div>
                                        </div>

                                        {app.status === 'interview_scheduled' && (
                                            <div className="mt-2 text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded inline-block">
                                                📅 Interview Scheduled
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
