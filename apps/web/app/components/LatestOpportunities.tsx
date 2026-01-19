import Link from 'next/link';
import React from 'react';

export const LatestOpportunities = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-text-main dark:text-white mb-8">Latest Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Job Card 1 */}
                    <div className="group bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1 relative">
                        <div className="absolute top-6 right-6">
                            <button className="text-gray-400 hover:text-accent transition-colors">
                                <span className="material-symbols-outlined">bookmark</span>
                            </button>
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="size-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-2 flex items-center justify-center shadow-sm">
                                <span className="font-black text-blue-600 text-lg">S</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-text-main dark:text-white leading-tight group-hover:text-primary transition-colors">Senior Product Designer</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400">Samsung Electronics</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                Seoul, Gangnam
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                Full-time
                            </span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-1.5 text-accent font-medium text-xs">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                Visa Sponsorship
                            </div>
                            <span className="text-xs text-gray-400">2h ago</span>
                        </div>
                    </div>
                    {/* Job Card 2 */}
                    <div className="group bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1 relative">
                        <div className="absolute top-6 right-6">
                            <button className="text-gray-400 hover:text-accent transition-colors">
                                <span className="material-symbols-outlined">bookmark</span>
                            </button>
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="size-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-2 flex items-center justify-center shadow-sm">
                                <span className="font-black text-red-600 text-lg">L</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-text-main dark:text-white leading-tight group-hover:text-primary transition-colors">Global Marketing Lead</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400">LG CNS</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                Seoul, Magok
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                Contract
                            </span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-1.5 text-accent font-medium text-xs">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                Visa Support
                            </div>
                            <span className="text-xs text-gray-400">5h ago</span>
                        </div>
                    </div>
                    {/* Job Card 3 */}
                    <div className="group bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1 relative">
                        <span className="absolute -top-3 -right-3 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">NEW</span>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="size-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-2 flex items-center justify-center shadow-sm">
                                <span className="font-black text-emerald-600 text-lg">H</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-text-main dark:text-white leading-tight group-hover:text-primary transition-colors">Hospitality Manager</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400">Hyatt Regency</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                Incheon Airport
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                Shift Work
                            </span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-1.5 text-accent font-medium text-xs">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                Visa Support
                            </div>
                            <span className="text-xs text-gray-400">Just now</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Show More Jobs
                    </button>
                </div>
            </div>
        </section>
    );
};
