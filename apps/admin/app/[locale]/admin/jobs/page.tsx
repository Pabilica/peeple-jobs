"use client";

import React, { useState } from "react";
import { TopHeader } from "@/app/components/TopHeader";

// Mock Jobs
const MOCK_JOBS = [
    {
        id: "job-1",
        title: "Senior Easy Money Maker",
        company: "Unknown LLC",
        postedDate: "2025-12-05",
        status: "Flagged",
        reports: 5,
        reason: "Suspected Scam",
    },
    {
        id: "job-2",
        title: "Frontend Developer",
        company: "TechCorp Inc.",
        postedDate: "2025-12-04",
        status: "Active",
        reports: 0,
        reason: "-",
    },
    {
        id: "job-3",
        title: "Personal Assistant Needed ASAP",
        company: "Individual",
        postedDate: "2025-12-03",
        status: "Active",
        reports: 2,
        reason: "Inappropriate Content",
    },
];

export default function JobManagementPage() {
    const [jobs, setJobs] = useState(MOCK_JOBS);

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to DELETE this job posting? This action cannot be undone.")) {
            setJobs(prev => prev.filter(j => j.id !== id));
        }
    };

    const handleSuspend = (id: string) => {
        setJobs(prev => prev.map(j => j.id === id ? { ...j, status: 'Suspended' } : j));
    };

    return (
        <div className="flex flex-col h-screen h-[100dvh] bg-surface-ground overflow-hidden">
            <TopHeader title="Job Management" />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Table */}
                    <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Job Title / Company</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Posted Date</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Reports</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Reason (if flagged)</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {jobs.map((job) => (
                                    <tr key={job.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">{job.title}</p>
                                                <p className="text-xs text-slate-500">{job.company}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{job.postedDate}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${job.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                job.status === 'Flagged' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                }`}>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {job.reports > 0 ? (
                                                <span className="text-red-500 font-bold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">warning</span>
                                                    {job.reports}
                                                </span>
                                            ) : '-'}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                                            {job.reason}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-1 px-3 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold">
                                                    View
                                                </button>
                                                <button
                                                    onClick={() => handleSuspend(job.id)}
                                                    className="p-1 text-slate-400 hover:text-orange-500 transition-colors" title="Suspend"
                                                >
                                                    <span className="material-symbols-outlined text-[20px]">pause</span>
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(job.id)}
                                                    className="p-1 text-slate-400 hover:text-red-500 transition-colors" title="Delete"
                                                >
                                                    <span className="material-symbols-outlined text-[20px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
