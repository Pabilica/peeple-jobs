"use client";

import React, { useState } from "react";
import { TopHeader } from "../../components/TopHeader";

// Mock User Data
const MOCK_USERS = [
    {
        id: "usr-101",
        name: "Min-ji Kim",
        email: "minji.kim@example.com",
        type: "Job Seeker",
        joinDate: "2025-10-15",
        status: "Active",
        reports: 0,
    },
    {
        id: "usr-102",
        name: "John Smith",
        email: "john.smith@techcorp.com",
        type: "Company Rep",
        joinDate: "2025-10-20",
        status: "Active",
        reports: 1,
    },
    {
        id: "usr-103",
        name: "Sarah Connor",
        email: "sarah.c@design.io",
        type: "Job Seeker",
        joinDate: "2025-11-01",
        status: "Suspended",
        reports: 5,
    },
    {
        id: "usr-104",
        name: "David Park",
        email: "david.p@startup.kr",
        type: "Company Rep",
        joinDate: "2025-11-05",
        status: "Active",
        reports: 0,
    },
    {
        id: "usr-105",
        name: "Emma Watson",
        email: "emma.w@actor.com",
        type: "Job Seeker",
        joinDate: "2025-11-10",
        status: "Banned",
        reports: 12,
    },
];

export default function UserManagementPage() {
    const [users, setUsers] = useState(MOCK_USERS);
    const [filterStatus, setFilterStatus] = useState("All");

    const filteredUsers = users.filter((user) => {
        if (filterStatus === "All") return true;
        return user.status === filterStatus;
    });

    const handleStatusChange = (userId: string, newStatus: string) => {
        if (confirm(`Are you sure you want to change status to ${newStatus}?`)) {
            setUsers((prev) =>
                prev.map((u) => (u.id === userId ? { ...u, status: newStatus } : u))
            );
        }
    };

    return (
        <div className="flex flex-col h-screen h-[100dvh] bg-surface-ground overflow-hidden">
            <TopHeader title="User Management" />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg p-1">
                            {["All", "Active", "Suspended", "Banned"].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setFilterStatus(status)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filterStatus === status
                                        ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                                        : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400">search</span>
                            </span>
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">User</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Type</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Join Date</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Reports</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">{user.name}</p>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.type === 'Company Rep' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                                                {user.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{user.joinDate}</td>
                                        <td className="px-6 py-4">
                                            {user.reports > 0 ? (
                                                <span className="text-red-500 font-bold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">warning</span>
                                                    {user.reports}
                                                </span>
                                            ) : (
                                                <span className="text-slate-400">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold flex w-fit items-center gap-1 ${user.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                    user.status === 'Suspended' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                }`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                {user.status !== 'Banned' && (
                                                    <button
                                                        onClick={() => handleStatusChange(user.id, 'Banned')}
                                                        className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                                                        title="Ban User"
                                                    >
                                                        <span className="material-symbols-outlined text-[20px]">block</span>
                                                    </button>
                                                )}
                                                {user.status === 'Active' ? (
                                                    <button
                                                        onClick={() => handleStatusChange(user.id, 'Suspended')}
                                                        className="p-1 text-slate-400 hover:text-orange-500 transition-colors"
                                                        title="Suspend User"
                                                    >
                                                        <span className="material-symbols-outlined text-[20px]">pause</span>
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handleStatusChange(user.id, 'Active')}
                                                        className="p-1 text-slate-400 hover:text-green-500 transition-colors"
                                                        title="Activate User"
                                                    >
                                                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                                    </button>
                                                )}
                                                <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
