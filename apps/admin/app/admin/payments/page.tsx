"use client";

import React, { useState } from "react";
import { TopHeader } from "../../components/TopHeader";

// Mock Transactions
const MOCK_TRANSACTIONS = [
    {
        id: "txn-123456",
        company: "TechCorp Inc.",
        plan: "Premium Scale",
        amount: "$199.00",
        date: "2025-01-20",
        status: "Paid",
    },
    {
        id: "txn-123455",
        company: "Design Studio A",
        plan: "Standard Growth",
        amount: "$49.00",
        date: "2025-01-19",
        status: "Paid",
    },
    {
        id: "txn-123454",
        company: "StartUp Z",
        plan: "Standard Growth",
        amount: "$49.00",
        date: "2025-01-18",
        status: "Refunded",
    },
    {
        id: "txn-123453",
        company: "Global Trading Co.",
        plan: "Standard Growth",
        amount: "$49.00",
        date: "2025-01-15",
        status: "Failed",
    },
];

export default function PaymentManagementPage() {
    const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
    const [filterStatus, setFilterStatus] = useState("All");

    const filteredTransactions = transactions.filter((txn) => {
        if (filterStatus === "All") return true;
        return txn.status === filterStatus;
    });

    const handleRefund = (id: string) => {
        if (confirm("Are you sure you want to process a REFUND for this transaction?")) {
            setTransactions(prev => prev.map(t => t.id === id ? { ...t, status: 'Refunded' } : t));
        }
    };

    return (
        <div className="flex flex-col h-screen h-[100dvh] bg-surface-ground overflow-hidden">
            <TopHeader title="Payment & Refunds" />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg p-1">
                            {["All", "Paid", "Refunded", "Failed"].map((status) => (
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
                                placeholder="Search transactions..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Transaction ID</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Company</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Plan</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Amount</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Date</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {filteredTransactions.map((txn) => (
                                    <tr key={txn.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-mono text-xs">{txn.id}</td>
                                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{txn.company}</td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{txn.plan}</td>
                                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{txn.amount}</td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{txn.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${txn.status === 'Paid' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                    txn.status === 'Refunded' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                                                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                }`}>
                                                {txn.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {txn.status === 'Paid' && (
                                                <button
                                                    onClick={() => handleRefund(txn.id)}
                                                    className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                                                >
                                                    Refund
                                                </button>
                                            )}
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
