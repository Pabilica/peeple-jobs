"use client";

import React, { useState } from "react";
import { TopHeader } from "../../components/TopHeader";

// Mock Company Data (Approved Companies)
const MOCK_COMPANIES = [
    {
        id: "com-1",
        name: "TechCorp Inc.",
        industry: "IT / Software",
        location: "Gangnam, Seoul",
        activeJobs: 5,
        status: "Active",
        joinDate: "2025-01-10",
    },
    {
        id: "com-2",
        name: "Design Studio A",
        industry: "Design",
        location: "Mapo, Seoul",
        activeJobs: 2,
        status: "Active",
        joinDate: "2025-01-15",
    },
    {
        id: "com-3",
        name: "Global Trading Co.",
        industry: "Trade / Logistics",
        location: "Busan",
        activeJobs: 0,
        status: "Suspended",
        joinDate: "2025-02-01",
    },
    {
        id: "com-4",
        name: "StartUp Z",
        industry: "Finance",
        location: "Yeouido, Seoul",
        activeJobs: 12,
        status: "Active",
        joinDate: "2025-02-05",
    },
];

export default function CompanyManagementPage() {
    const [companies, setCompanies] = useState(MOCK_COMPANIES);

    const handleAction = (id: string, action: 'Suspend' | 'Activate') => {
        if (confirm(`Are you sure you want to ${action} this company?`)) {
            setCompanies(prev => prev.map(c => c.id === id ? { ...c, status: action === 'Suspend' ? 'Suspended' : 'Active' } : c));
        }
    };

    return (
        <div className="flex flex-col h-screen h-[100dvh] bg-surface-ground overflow-hidden">
            <TopHeader title="Company Management" />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Companies</p>
                            <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{companies.length}</p>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Active Jobs</p>
                            <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                                {companies.reduce((acc, cur) => acc + cur.activeJobs, 0)}
                            </p>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Company</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Industry / Location</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Join Date</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Active Jobs</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {companies.map((company) => (
                                    <tr key={company.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-slate-900 dark:text-white text-base">{company.name}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-slate-900 dark:text-white">{company.industry}</span>
                                                <span className="text-xs text-slate-500">{company.location}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{company.joinDate}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md text-xs font-bold">
                                                {company.activeJobs} Jobs
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold flex w-fit items-center gap-1 ${company.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                }`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                {company.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-1 px-3 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold">
                                                    View
                                                </button>
                                                {company.status === 'Active' ? (
                                                    <button
                                                        onClick={() => handleAction(company.id, 'Suspend')}
                                                        className="p-1 text-slate-400 hover:text-red-500 transition-colors" title="Suspend"
                                                    >
                                                        <span className="material-symbols-outlined text-[20px]">block</span>
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handleAction(company.id, 'Activate')}
                                                        className="p-1 text-slate-400 hover:text-green-500 transition-colors" title="Activate"
                                                    >
                                                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                                    </button>
                                                )}
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
