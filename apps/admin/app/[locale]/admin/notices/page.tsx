"use client";

import React, { useState } from "react";
import { TopHeader } from "@/app/components/TopHeader";

// Mock Notices
const MOCK_NOTICES = [
    {
        id: "not-1",
        title: "Platform Maintenance scheduled for Jan 25",
        category: "System",
        status: "Published",
        date: "2025-01-20",
        views: 1205,
    },
    {
        id: "not-2",
        title: "New Policy for Job Postings",
        category: "Announcement",
        status: "Draft",
        date: "2025-01-21",
        views: 0,
    },
    {
        id: "not-3",
        title: "Welcome to Peeple Jobs Beta",
        category: "Event",
        status: "Published",
        date: "2024-12-01",
        views: 5402,
    },
];

export default function NoticeManagementPage() {
    const [notices, setNotices] = useState(MOCK_NOTICES);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen h-[100dvh] bg-surface-ground overflow-hidden">
            <TopHeader title="Notice & Event Management" />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Notices</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            Create New
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Title</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Category</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Date</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Views</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {notices.map((notice) => (
                                    <tr key={notice.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-slate-900 dark:text-white">{notice.title}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400 font-medium">
                                                {notice.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{notice.date}</td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{notice.views.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${notice.status === 'Published' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                                                }`}>
                                                {notice.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1 px-3 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold mr-2">
                                                Edit
                                            </button>
                                            <button className="text-red-500 hover:text-red-700 font-bold text-xs">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Create Modal (Mock) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-surface-dark rounded-xl shadow-2xl max-w-lg w-full overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Create New Notice</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Title</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark" placeholder="Enter title..." />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark">
                                    <option>Announcement</option>
                                    <option>System</option>
                                    <option>Event</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Content</label>
                                <textarea rows={5} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark" placeholder="Enter content..."></textarea>
                            </div>
                        </div>
                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    alert('Notice Created! (Mock)');
                                    setIsModalOpen(false);
                                }}
                                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20"
                            >
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
