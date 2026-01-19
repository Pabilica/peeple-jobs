'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { MOCK_USER_STATS, RECOMMENDED_JOBS } from '@/lib/mock';

export default function DashboardPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <Navbar />

            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col gap-8">

                    {/* Welcome Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                Welcome back, Alex! 👋
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">
                                You have <span className="text-primary font-bold">3 new job matches</span> today.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link href="/resume" className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">edit_document</span>
                                <span>Edit Resume</span>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                                Profile Views
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{MOCK_USER_STATS.profileViews}</p>
                            <p className="text-xs text-green-600 font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                +12% this week
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                                <span className="material-symbols-outlined text-xl">search</span>
                                Search Appearances
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{MOCK_USER_STATS.searchAppearances}</p>
                        </div>
                        <div className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                                <span className="material-symbols-outlined text-xl">send</span>
                                Applications
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{MOCK_USER_STATS.applications}</p>
                        </div>
                        <div className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                                <span className="material-symbols-outlined text-xl">chat</span>
                                Interviews
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{MOCK_USER_STATS.interviews}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Recent Activity / Applications */}
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Applications</h2>
                                <Link href="/jobs" className="text-primary text-sm font-bold hover:underline">View All</Link>
                            </div>
                            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                                {/* Mock Application Item */}
                                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 font-bold">K</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">Kakao Corp</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Frontend Developer • Applied 2d ago</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold">In Review</span>
                                </div>
                                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 font-bold">C</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">Coupang</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Product Manager • Applied 5d ago</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold">Viewed</span>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Jobs */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recommended for You</h2>
                            </div>
                            <div className="flex flex-col gap-3">
                                {RECOMMENDED_JOBS.slice(0, 2).map((job) => (
                                    <Link href={`/jobs/${job.id}`} key={job.id} className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center font-black text-lg ${job.logoColor}`}>
                                                {job.logo}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">{job.title}</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">{job.company}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold">
                                                {job.location}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
