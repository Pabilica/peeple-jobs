'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CompanySettingsPage() {
    const [activeTab, setActiveTab] = useState<'profile' | 'billing' | 'notifications'>('profile');

    return (
        <div className="bg-slate-50 dark:bg-black min-h-screen font-display pb-20">
            {/* Header */}
            <header className="bg-white dark:bg-[#1e1e1e] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/company/dashboard" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-500">arrow_back</span>
                        <span className="font-bold text-slate-900 dark:text-white">Dashboard</span>
                    </Link>
                    <h1 className="text-lg font-bold text-slate-900 dark:text-white">Company Settings</h1>
                    <div className="w-20"></div> {/* Spacer */}
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar Nav */}
                    <div className="md:col-span-1 space-y-2">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-colors ${activeTab === 'profile' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                            <span className="material-symbols-outlined">business</span>
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('billing')}
                            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-colors ${activeTab === 'billing' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                            <span className="material-symbols-outlined">credit_card</span>
                            Billing & Plan
                        </button>
                        <button
                            onClick={() => setActiveTab('notifications')}
                            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-colors ${activeTab === 'notifications' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                            <span className="material-symbols-outlined">notifications</span>
                            Notifications
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="md:col-span-3">
                        {activeTab === 'profile' && (
                            <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Company Profile</h2>

                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXYW4AceDPCjK7JN5kR_BxxTyIEw08L9Q5G8sF9-QsN11p53IlanLZCMETOzOnROLj6rgE0gLapkE57cTwSrn1_XtF0HB1A5xhv9WLcDkMmOVqSYiY5SMC0NwqPOVLfyj84EUGM0hSnasdL78HhqFttKmwoC6StCGg_94XI4xqqQ9BMRoxZ_4aPaRkWGd7sX8YMvgcO15WB4MJ22x52khq1yIDWNHNwidjRpwokbnQ6VW5FJIbitpx0ylk0NFWUxnLjmL7GZy4d58')" }}></div>
                                    <div>
                                        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700">Change Logo</button>
                                        <p className="text-xs text-slate-500 mt-2">Recommended: 400x400px</p>
                                    </div>
                                </div>

                                <hr className="border-slate-100 dark:border-slate-800" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Company Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e]" defaultValue="TechCorp Inc." />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Industry</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e]" defaultValue="IT / Software" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Website</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e]" defaultValue="https://techcorp.kr" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Introduction</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e]" defaultValue="Leading tech company in Korea..." />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-teal-700 transition-colors">Save Changes</button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'billing' && (
                            <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Subscription Plan</h2>

                                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Standard Plan</h3>
                                        <p className="text-slate-500 text-sm">Active until Feb 20, 2026</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-xl text-primary">$49<span className="text-sm text-slate-500 font-normal">/mo</span></span>
                                        <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-700">Manage Plan</button>
                                    </div>
                                </div>

                                <h3 className="font-bold text-slate-900 dark:text-white mt-8 mb-2">Payment History</h3>
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-500">
                                            <th className="py-2">Date</th>
                                            <th className="py-2">Amount</th>
                                            <th className="py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        <tr>
                                            <td className="py-3">Jan 20, 2026</td>
                                            <td className="py-3">$49.00</td>
                                            <td className="py-3 text-green-500 font-bold">Paid</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">Dec 20, 2025</td>
                                            <td className="py-3">$49.00</td>
                                            <td className="py-3 text-green-500 font-bold">Paid</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Notification Preferences</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">Email Notifications</h4>
                                            <p className="text-xs text-slate-500">Receive weekly summaries and important updates.</p>
                                        </div>
                                        <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                                            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:bg-primary" defaultChecked />
                                            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-primary/50"></label>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">New Applicant Alert</h4>
                                            <p className="text-xs text-slate-500">Get notified instantly when someone applies.</p>
                                        </div>
                                        <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                                            <input type="checkbox" name="toggle2" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:bg-primary" defaultChecked />
                                            <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-primary/50"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
