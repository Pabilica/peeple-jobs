import React from 'react';
import Link from 'next/link';

// Mock data needed for this component
const SCRAPPED_JOBS = [
    {
        id: 'job-101',
        title: 'Senior Frontend Engineer',
        company: 'Toss',
        location: 'Gangnam, Seoul',
        salary: '₩60M - ₩100M',
        postedAt: '2 days ago',
        logo: 'T',
        logoColor: 'text-blue-500',
    },
    {
        id: 'job-102',
        title: 'Product Designer',
        company: 'Danggeun Market',
        location: 'Seocho, Seoul',
        salary: '₩50M - ₩80M',
        postedAt: '5 days ago',
        logo: 'D',
        logoColor: 'text-orange-500',
    },
];

export const ScrappedJobs = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Saved Jobs ({SCRAPPED_JOBS.length})</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SCRAPPED_JOBS.map((job) => (
                    <div key={job.id} className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all relative group">
                        <button className="absolute top-4 right-4 text-primary hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-[20px] font-variation-FILL">bookmark</span>
                        </button>
                        <Link href={`/jobs/${job.id}`} className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center font-black text-xl ${job.logoColor}`}>
                                {job.logo}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-primary transition-colors">{job.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">{job.company} • {job.location}</p>
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold">
                                        {job.salary}
                                    </span>
                                    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold">
                                        {job.postedAt}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {SCRAPPED_JOBS.length === 0 && (
                <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">bookmark_border</span>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">No saved jobs yet.</p>
                    <Link href="/jobs" className="text-primary font-bold text-sm hover:underline mt-2 inline-block">Browse Jobs</Link>
                </div>
            )}
        </div>
    );
};
