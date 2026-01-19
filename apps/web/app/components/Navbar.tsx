import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined">work</span>
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-text-main dark:text-white">Peeple Jobs</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/jobs" className="text-sm font-semibold text-primary">Jobs</Link>
                        <Link href="/dashboard" className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-300 transition-colors">Dashboard</Link>
                        <Link href="/onboarding/visa" className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-300 transition-colors">Visa Guide</Link>
                        <Link href="/resume" className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-300 transition-colors">Resume</Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {/* Language Selector */}
                        <button className="hidden sm:flex items-center gap-1 text-sm font-medium text-text-main dark:text-white px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-symbols-outlined text-xl">language</span>
                            <span>EN</span>
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </button>
                        <button className="hidden sm:block text-sm font-bold text-text-main dark:text-white hover:text-primary px-3 transition-colors">
                            Sign In
                        </button>
                        <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                            Post a Job
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
