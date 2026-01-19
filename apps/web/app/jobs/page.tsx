'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { RECOMMENDED_JOBS } from '@/lib/mock';

export default function JobSearchPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <Navbar />

            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex gap-8">

                {/* Sidebar Filters */}
                <aside className="hidden lg:flex flex-col w-64 gap-6 shrink-0">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Filters</h3>
                        <button className="text-sm text-primary font-semibold hover:underline">Reset</button>
                    </div>

                    {/* Job Type Filter */}
                    <div className="flex flex-col gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Job Type</h4>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Full-time</span>
                            <span className="ml-auto text-xs text-slate-400">120</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Contract</span>
                            <span className="ml-auto text-xs text-slate-400">45</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Internship</span>
                            <span className="ml-auto text-xs text-slate-400">23</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Freelance</span>
                            <span className="ml-auto text-xs text-slate-400">12</span>
                        </label>
                    </div>

                    {/* Visa Type Filter */}
                    <div className="flex flex-col gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Visa Support</h4>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="radio" name="visa" className="w-4 h-4 border-gray-300 text-primary focus:ring-primary" defaultChecked />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">All Jobs</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="radio" name="visa" className="w-4 h-4 border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Visa Sponsored</span>
                            <span className="ml-auto text-xs text-slate-400">86</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="radio" name="visa" className="w-4 h-4 border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Visa Specific (E-7)</span>
                            <span className="ml-auto text-xs text-slate-400">42</span>
                        </label>
                    </div>

                    {/* Location Filter */}
                    <div className="flex flex-col gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Location</h4>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Seoul</span>
                            <span className="ml-auto text-xs text-slate-400">150</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Gyeonggi-do</span>
                            <span className="ml-auto text-xs text-slate-400">40</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Remote</span>
                            <span className="ml-auto text-xs text-slate-400">15</span>
                        </label>
                    </div>
                </aside>

                {/* Job Listings Column */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Header & Search */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                            <span className="text-primary">245</span> Jobs found in South Korea
                        </h1>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400">search</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search by job title, company, or keywords"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                                />
                            </div>
                            <button className="px-5 rounded-xl bg-primary text-white font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-primary/20">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Job List */}
                    <div className="flex flex-col gap-4">
                        {RECOMMENDED_JOBS.map((job) => (
                            <Link href={`/jobs/${job.id}`} key={job.id} className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Logo */}
                                    <div className={`w-14 h-14 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-xl font-bold shrink-0 ${job.logoColor}`}>
                                        {job.logo}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col gap-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{job.company} • {job.location}</p>
                                            </div>
                                            {job.isNew && (
                                                <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wide">New</span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {job.tags?.map((tag, i) => (
                                                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-50 dark:border-gray-800/50">
                                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{job.salary || 'Competitive Salary'}</p>
                                            <p className="text-xs text-slate-400 font-medium">{job.postedTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
