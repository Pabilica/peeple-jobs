'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { RECOMMENDED_JOBS } from '@/lib/mock';

export default function JobDetailsPage() {
    const params = useParams();
    const job = RECOMMENDED_JOBS.find((j) => j.id === params.id);

    if (!job) {
        // For demo purposes, fallback to first job if ID not found, or use real notFound()
        // return notFound();
    }

    // Use the found job or default to the first one for robustness during demo
    const displayJob = job || RECOMMENDED_JOBS[0];

    // Mock state for interactions
    const [isSaved, setIsSaved] = React.useState(false);
    const [isFollowing, setIsFollowing] = React.useState(false);


    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <Navbar />

            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Jobs
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Header Card */}
                        <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className={`w-20 h-20 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl font-bold shrink-0 ${displayJob.logoColor}`}>
                                    {displayJob.logo}
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">{displayJob.title}</h1>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">domain</span>
                                            {displayJob.company}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                                            {displayJob.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                                            {displayJob.postedTime}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                {displayJob.tags?.map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Job Description */}
                        <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">About the Role</h3>
                            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                                <p className="mb-4">
                                    We are looking for a talented individual to join our growing team in Seoul. In this role, you will be responsible for driving key initiatives and collaborating with cross-functional teams to deliver high-quality results.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-4">
                                    <li>Collaborate with product and engineering teams to define requirements.</li>
                                    <li>Develop and maintain high-quality code and documentation.</li>
                                    <li>Participate in code reviews and mentorship.</li>
                                    <li>Drive continuous improvement in our processes and tools.</li>
                                </ul>
                                <h4 className="text-md font-bold text-slate-900 dark:text-white mb-2 mt-6">Requirements</h4>
                                <ul className="list-disc pl-5 space-y-2 mb-4">
                                    <li>3+ years of relevant experience.</li>
                                    <li>Strong proficiency in modern technologies (React, TypeScript, etc.).</li>
                                    <li>Excellent communication skills English (Korean is a plus).</li>
                                    <li>Valid visa or eligibility for sponsorship (E-7 support available).</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar (Right) */}
                    <aside className="flex flex-col gap-6">

                        {/* Action Card */}
                        <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24">
                            <div className="flex flex-col gap-4">
                                <button className="w-full h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-teal-700 transition-all flex items-center justify-center gap-2">
                                    Apply Now
                                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                                </button>
                                <button
                                    onClick={() => setIsSaved(!isSaved)}
                                    className={`w-full h-12 rounded-xl border font-bold transition-colors flex items-center justify-center gap-2 ${isSaved ? 'bg-primary/10 text-primary border-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-transparent hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                                >
                                    <span className={`material-symbols-outlined text-lg ${isSaved ? 'font-variation-FILL' : ''}`}>{isSaved ? 'bookmark' : 'bookmark_border'}</span>
                                    {isSaved ? 'Saved' : 'Save Job'}
                                </button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Salary</span>
                                    <span className="font-bold text-slate-900 dark:text-white">{displayJob.salary || 'Negotiable'}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Job Type</span>
                                    <span className="font-bold text-slate-900 dark:text-white">{displayJob.type}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Experience</span>
                                    <span className="font-bold text-slate-900 dark:text-white">3-5 Years</span>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 relative">
                            <button
                                onClick={() => setIsFollowing(!isFollowing)}
                                className="absolute top-6 right-6 text-sm font-bold text-primary hover:underline"
                            >
                                {isFollowing ? 'Following' : '+ Follow'}
                            </button>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-3">About {displayJob.company}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                                A leading technology company innovating in the global market. Committed to diversity and inclusion.
                            </p>
                            <a href="#" className="text-primary text-sm font-bold hover:underline">View Company Profile</a>
                        </div>

                    </aside>

                </div>
            </main>
        </div>
    );
}
