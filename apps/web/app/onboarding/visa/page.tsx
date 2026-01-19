'use client';

import React, { useState } from 'react';
import { VISA_TYPES, VisaType } from '@/lib/mock';
import Link from 'next/link';

export default function VisaSelectionPage() {
    const [selectedVisa, setSelectedVisa] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setSelectedVisa(id);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased min-h-screen flex flex-col">
            {/* Top Navigation */}
            <header className="w-full bg-white dark:bg-[#1e1e1e] border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-3xl">work_outline</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Peeple Jobs</h2>
                    </Link>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-semibold">
                        <span className="material-symbols-outlined text-[18px]">language</span>
                        <span>English / KR</span>
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 py-8 pb-32">
                <div className="w-full max-w-4xl flex flex-col gap-8">
                    {/* Progress Stepper */}
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <p className="text-primary font-bold text-sm tracking-wide uppercase">Step 1 of 3</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Visa Selection</p>
                        </div>
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-1/3 rounded-full"></div>
                        </div>
                    </div>

                    {/* Page Header */}
                    <div className="flex flex-col gap-3 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                            Let's start with your visa status.
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
                            Select your current South Korean visa type so we can find jobs that can legally sponsor you.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400">search</span>
                        </div>
                        <input
                            className="w-full pl-11 pr-4 py-4 rounded-xl border-none bg-white dark:bg-[#1e1e1e] shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary dark:focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400 transition-shadow outline-none"
                            placeholder="Type 'Student' or 'D-2' to filter options..."
                            type="text"
                        />
                    </div>

                    {/* Visa Selection Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {VISA_TYPES.map((visa) => (
                            <div
                                key={visa.id}
                                onClick={() => handleSelect(visa.id)}
                                className={`group relative flex flex-col gap-4 p-5 rounded-xl bg-white dark:bg-[#1e1e1e] cursor-pointer shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 ${selectedVisa === visa.id
                                        ? 'ring-2 ring-primary border-transparent shadow-lg shadow-primary/10'
                                        : 'ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-primary/50'
                                    }`}
                            >
                                {selectedVisa === visa.id && (
                                    <div className="absolute top-4 right-4 text-primary">
                                        <span className="material-symbols-outlined filled font-variation-settings-'FILL'1">check_circle</span>
                                    </div>
                                )}
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-1 ${visa.colorClass}`}>
                                    <span className="material-symbols-outlined text-2xl">{visa.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{visa.code}</h3>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">{visa.name}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                                        {visa.description}
                                    </p>
                                </div>
                                <div className={`mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex ${selectedVisa === visa.id ? 'justify-between' : 'justify-end'} items-center group/tooltip`}>
                                    {selectedVisa === visa.id && <span className="text-xs font-semibold text-primary">Selected</span>}
                                    <button className="text-slate-400 hover:text-primary transition-colors" title="Learn more">
                                        <span className="material-symbols-outlined text-xl">info</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* "Don't know" option */}
                    <div className="flex justify-center mt-2">
                        <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">help</span>
                            <span>I don't have a visa yet / I am currently overseas</span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Sticky Footer Action Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#1e1e1e] border-t border-slate-100 dark:border-slate-800 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                    <Link href="/" className="px-6 h-12 rounded-xl text-slate-500 dark:text-slate-400 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center">
                        Back
                    </Link>
                    <Link href="/dashboard" className="flex-1 sm:flex-none sm:w-48 px-6 h-12 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-teal-600 hover:shadow-primary/50 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                        <span>Continue</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
