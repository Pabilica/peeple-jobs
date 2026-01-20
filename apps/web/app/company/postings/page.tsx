'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar'; // Adjust import path if needed (might be ../../components/Navbar) - Actually standard is to import from centralized components or local. Let's assume standard Navbar is intended.
// Note: In previous file Navbar was imported from '../components/Navbar' in app/interviews/page.tsx, which is app/components/Navbar.tsx.
// So here it should be '../../components/Navbar' in app/company/postings/page.tsx? No, app/components/Navbar.tsx is likely accessible via @/components or ../../components if relative.
// Wait, checking previous file content. 'import { Navbar } from '../components/Navbar';' in app/interviews/page.tsx. Use correct relative path.

// Mock Job Data
const MOCK_POSTINGS = [
    {
        id: 'job-1',
        title: 'Senior Frontend Engineer',
        status: 'Active',
        postedDate: '2025-01-15',
        views: 1240,
        applicants: 45,
        location: 'Seoul, Gangnam',
        type: 'Full-time',
    },
    {
        id: 'job-2',
        title: 'Product Designer',
        status: 'Active',
        postedDate: '2025-01-18',
        views: 856,
        applicants: 23,
        location: 'Remote',
        type: 'Contract',
    },
    {
        id: 'job-3',
        title: 'Backend Developer (Java)',
        status: 'Closed',
        postedDate: '2024-12-01',
        views: 3500,
        applicants: 120,
        location: 'Seoul, Pangyo',
        type: 'Full-time',
    },
    {
        id: 'job-4',
        title: 'Marketing Manager',
        status: 'Draft',
        postedDate: '-',
        views: 0,
        applicants: 0,
        location: 'Seoul, Yongsan',
        type: 'Full-time',
    }
];

export default function CompanyPostingsPage() {
    const [filter, setFilter] = useState('All');

    const filteredPostings = filter === 'All'
        ? MOCK_POSTINGS
        : MOCK_POSTINGS.filter(p => p.status === filter);

    return (
        <div className="bg-slate-50 dark:bg-black min-h-screen font-display">
            {/* Simple Company Header or reuse Main Navbar? Reusing Main Navbar for consistency, or simpler header. */}
            {/* Assuming consistent layout, I'll use a simple header for Company dashboard area or just main layout. */}
            <header className="bg-white dark:bg-[#1e1e1e] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/company/dashboard" className="flex items-center gap-2">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">business</span>
                        </div>
                        <span className="text-xl font-bold text-slate-900 dark:text-white">Company Dashboard</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Job Postings</h1>
                        <p className="text-slate-500 dark:text-slate-400">Manage your recruitment posts and track performance.</p>
                    </div>
                    <Link href="/company/postings/create" className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                        <span className="material-symbols-outlined">add</span>
                        Post New Job
                    </Link>
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {['All', 'Active', 'Draft', 'Closed'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${filter === status ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-white dark:bg-[#1e1e1e] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'}`}
                        >
                            {status}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Job Title</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Stats</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {filteredPostings.map((post) => (
                                <tr key={post.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-900 dark:text-white">{post.title}</div>
                                        <div className="text-xs text-slate-500">{post.location} • {post.type}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${post.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                post.status === 'Draft' ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400' :
                                                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4 text-sm">
                                            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400" title="Views">
                                                <span className="material-symbols-outlined text-xs">visibility</span> {post.views}
                                            </span>
                                            <span className="flex items-center gap-1 text-primary font-bold" title="Applicants">
                                                <span className="material-symbols-outlined text-xs">group</span> {post.applicants}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                                        {post.postedDate}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors p-2">
                                            <span className="material-symbols-outlined">edit</span>
                                        </button>
                                        <button className="text-slate-400 hover:text-red-500 transition-colors p-2">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredPostings.length === 0 && (
                        <div className="p-12 text-center text-slate-500 dark:text-slate-400">
                            No job postings found.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
