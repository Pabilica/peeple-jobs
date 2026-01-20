'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/app/components/Navbar';

// Mock Application Data
const MOCK_APPLICATIONS = [
    {
        id: 'app-1',
        jobId: 'job-101',
        jobTitle: 'Senior Frontend Engineer',
        company: 'Toss',
        companyLogo: 'T',
        companyLogoColor: 'text-blue-500',
        location: 'Gangnam, Seoul',
        appliedAt: '2023-10-25',
        status: 'In Review', // Applied, In Review, Interview, Offer, Rejected, Canceled
        statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    },
    {
        id: 'app-2',
        jobId: 'job-102',
        jobTitle: 'Product Designer',
        company: 'Danggeun Market',
        companyLogo: 'D',
        companyLogoColor: 'text-orange-500',
        location: 'Seocho, Seoul',
        appliedAt: '2023-10-20',
        status: 'Viewed',
        statusColor: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    },
    {
        id: 'app-3',
        jobId: 'job-103',
        jobTitle: 'Backend Developer',
        company: 'Line',
        companyLogo: 'L',
        companyLogoColor: 'text-green-500',
        location: 'Bundang, Gyeonggi',
        appliedAt: '2023-10-15',
        status: 'Rejected',
        statusColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    },
    {
        id: 'app-4',
        jobId: 'job-104',
        jobTitle: 'Data Analyst',
        company: 'Coupang',
        companyLogo: 'C',
        companyLogoColor: 'text-red-600',
        location: 'Songpa, Seoul',
        appliedAt: '2023-10-10',
        status: 'Offer',
        statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    }
];

export default function ApplicationsPage() {
    const [applications, setApplications] = useState(MOCK_APPLICATIONS);

    const handleCancel = (appId: string) => {
        if (confirm('Are you sure you want to cancel this application?')) {
            setApplications(prev => prev.map(app =>
                app.id === appId
                    ? { ...app, status: 'Canceled', statusColor: 'bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400' }
                    : app
            ));
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <Navbar />

            <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Application History</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Track and manage your job applications.</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        <th className="px-6 py-4 font-bold">Role & Company</th>
                                        <th className="px-6 py-4 font-bold">Applied Date</th>
                                        <th className="px-6 py-4 font-bold">Status</th>
                                        <th className="px-6 py-4 font-bold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {applications.map((app) => (
                                        <tr key={app.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center font-bold ${app.companyLogoColor}`}>
                                                        {app.companyLogo}
                                                    </div>
                                                    <div>
                                                        <Link href={`/jobs/${app.jobId}`} className="font-bold text-slate-900 dark:text-white hover:text-primary transition-colors block">
                                                            {app.jobTitle}
                                                        </Link>
                                                        <span className="text-xs text-slate-500 dark:text-slate-400">{app.company} • {app.location}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                                {app.appliedAt}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${app.statusColor}`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    {(app.status === 'Applied' || app.status === 'Viewed' || app.status === 'In Review') && (
                                                        <button
                                                            onClick={() => handleCancel(app.id)}
                                                            className="text-xs font-bold text-red-500 hover:text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                        >
                                                            Cancel
                                                        </button>
                                                    )}
                                                    <Link
                                                        href={`/jobs/${app.jobId}`}
                                                        className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                                    >
                                                        Details
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {applications.length === 0 && (
                            <div className="p-12 text-center text-slate-500 dark:text-slate-400">
                                No applications yet.
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
