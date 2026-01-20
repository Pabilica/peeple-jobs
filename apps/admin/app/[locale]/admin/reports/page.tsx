"use client";

import React, { useState } from "react";
import { TopHeader } from "@/app/components/TopHeader";

// Mock Report Data
const MOCK_REPORTS = [
    {
        id: "rep-1",
        reporter: "Min-ji Kim",
        target: "Bad Company Inc.",
        targetType: "Company",
        reason: "Fake Job Posting",
        description: "This company is posting fake jobs to collect personal data.",
        date: "2025-12-01",
        status: "Pending",
    },
    {
        id: "rep-2",
        reporter: "John Smith",
        target: "Spam User",
        targetType: "User",
        reason: "Spam / Advertisement",
        description: "User is sending spam messages in community chat.",
        date: "2025-12-02",
        status: "Resolved",
    },
    {
        id: "rep-3",
        reporter: "System",
        target: "Scam Job",
        targetType: "Job",
        reason: "Inappropriate Content",
        description: "Job description contains inappropriate language.",
        date: "2025-12-03",
        status: "Pending",
    },
];

export default function ReportManagementPage() {
    const [reports, setReports] = useState(MOCK_REPORTS);
    const [selectedReport, setSelectedReport] = useState<typeof MOCK_REPORTS[0] | null>(null);

    const handleAction = (status: string) => {
        if (!selectedReport) return;
        setReports(prev => prev.map(r => r.id === selectedReport.id ? { ...r, status } : r));
        setSelectedReport(null);
    };

    return (
        <div className="flex flex-col h-screen h-[100dvh] bg-surface-ground overflow-hidden">
            <TopHeader title="Report Management" />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Reports</p>
                            <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                                {reports.filter(r => r.status === 'Pending').length}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Resolved Today</p>
                            <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">12</p>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Avg. Resolution Time</p>
                            <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">2.5h</p>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Date</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Reporter</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Target</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Reason</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Review</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {reports.map((report) => (
                                    <tr key={report.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{report.date}</td>
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{report.reporter}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900 dark:text-white">{report.target}</span>
                                                <span className="text-xs text-slate-500">{report.targetType}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{report.reason}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${report.status === 'Pending' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                }`}>
                                                {report.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setSelectedReport(report)}
                                                className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedReport && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-surface-dark rounded-xl shadow-2xl max-w-lg w-full overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Report Details</h3>
                            <button onClick={() => setSelectedReport(null)} className="text-slate-400 hover:text-slate-600">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Reporter</p>
                                    <p className="font-medium text-slate-900 dark:text-white">{selectedReport.reporter}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Target</p>
                                    <p className="font-medium text-slate-900 dark:text-white">{selectedReport.target} ({selectedReport.targetType})</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Reason</p>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedReport.reason}</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                <p className="text-sm text-slate-700 dark:text-slate-300">{selectedReport.description}</p>
                            </div>
                        </div>
                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3">
                            <button
                                onClick={() => handleAction('Dismissed')}
                                className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                            >
                                Dismiss
                            </button>
                            <button
                                onClick={() => handleAction('Resolved')}
                                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20"
                            >
                                Resolve & Sanction
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
