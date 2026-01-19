'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';

export default function ResumeBuilderPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <Navbar />

            <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 py-8">
                <div className="w-full max-w-5xl flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                                Create your Peeple Profile
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
                                Complete your profile to get 5x more interview requests.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-slate-500">Auto-saving...</span>
                            <button className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-700 text-white font-bold text-sm hover:bg-slate-800 transition-colors">
                                Preview
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Left Sidebar: Progress */}
                        <aside className="lg:col-span-3 lg:sticky lg:top-24 flex flex-col gap-6">
                            <div className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-800">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-slate-900 dark:text-white">Profile Strength</h3>
                                    <span className="text-sm font-bold text-primary">65%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-gray-800 rounded-full h-2.5 mb-4">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-900 dark:text-white">
                                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                        Personal Info
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-900 dark:text-white">
                                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                        Edu. & Experience
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-slate-300 text-[20px]">radio_button_unchecked</span>
                                        Skills & Languages
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-slate-300 text-[20px]">radio_button_unchecked</span>
                                        Visa Status
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        {/* Main Form Content */}
                        <div className="lg:col-span-9 flex flex-col gap-6">

                            {/* Skills Section */}
                            <section className="bg-white dark:bg-[#1e1e1e] p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-800">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                        <span className="material-symbols-outlined text-[24px]">construction</span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Skills</h2>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Add skills to help employers find you.</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {/* Added Skills */}
                                    <span className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold border border-indigo-100 dark:border-indigo-800/50">
                                        React.js
                                        <button className="hover:text-indigo-900 dark:hover:text-white">
                                            <span className="material-symbols-outlined text-[16px]">close</span>
                                        </button>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold border border-indigo-100 dark:border-indigo-800/50">
                                        TypeScript
                                        <button className="hover:text-indigo-900 dark:hover:text-white">
                                            <span className="material-symbols-outlined text-[16px]">close</span>
                                        </button>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold border border-indigo-100 dark:border-indigo-800/50">
                                        Tailwind CSS
                                        <button className="hover:text-indigo-900 dark:hover:text-white">
                                            <span className="material-symbols-outlined text-[16px]">close</span>
                                        </button>
                                    </span>
                                </div>

                                <div className="relative">
                                    <input type="text" placeholder="Add a skill (e.g. Python, Design...)" className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">add</span>
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    <p className="text-xs text-slate-500 w-full mb-1">Suggested:</p>
                                    <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">+ Next.js</button>
                                    <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">+ GraphQL</button>
                                    <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">+ Figma</button>
                                </div>
                            </section>

                            {/* Languages Section */}
                            <section className="bg-white dark:bg-[#1e1e1e] p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-800">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                        <span className="material-symbols-outlined text-[24px]">translate</span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Languages</h2>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Important for visa sponsorship chances.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Language Card 1 */}
                                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold text-slate-900 dark:text-white">English</span>
                                            <span className="text-sm font-medium text-slate-500">Native</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                            <div className="bg-teal-500 h-1.5 rounded-full w-full"></div>
                                        </div>
                                    </div>
                                    {/* Language Card 2 */}
                                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold text-slate-900 dark:text-white">Korean</span>
                                            <span className="text-sm font-medium text-slate-500">Intermediate (TOPIK 3)</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                            <div className="bg-teal-500 h-1.5 rounded-full w-2/5"></div>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-4 w-full py-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    Add Language
                                </button>
                            </section>

                            <div className="flex justify-end gap-4 mt-4">
                                <button className="px-6 py-3 rounded-xl text-slate-500 font-bold hover:bg-slate-100 transition-colors">Back</button>
                                <Link href="/dashboard" className="px-8 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-teal-700 transition-all flex items-center gap-2">
                                    Complete Profile
                                    <span className="material-symbols-outlined text-[20px]">check</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
