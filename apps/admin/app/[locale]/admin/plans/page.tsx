"use client";

import React, { useState } from "react";
import { TopHeader } from "@/app/components/TopHeader";

// Mock Plans
const MOCK_PLANS = [
    {
        id: "plan-free",
        name: "Free Starter",
        price: "$0",
        period: "Forever",
        active: true,
        features: 3,
    },
    {
        id: "plan-std",
        name: "Standard Growth",
        price: "$49",
        period: "Monthly",
        active: true,
        features: 5,
    },
    {
        id: "plan-prm",
        name: "Premium Scale",
        price: "$199",
        period: "Monthly",
        active: true,
        features: 10,
    },
];

export default function PlanManagementPage() {
    const [plans, setPlans] = useState(MOCK_PLANS);

    const toggleStatus = (id: string) => {
        setPlans(prev => prev.map(p => p.id === id ? { ...p, active: !p.active } : p));
    };

    return (
        <div className="flex flex-col h-screen h-[100dvh] bg-surface-ground overflow-hidden">
            <TopHeader title="Subscription Plans" />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Active Plans</h2>
                        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            Create New Plan
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan) => (
                            <div key={plan.id} className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{plan.name}</h3>
                                        <p className="text-sm text-slate-500">{plan.features} features configured</p>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${plan.active ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                                        }`}>
                                        {plan.active ? 'Active' : 'Inactive'}
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <span className="text-3xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                                    <span className="text-sm text-slate-500"> / {plan.period}</span>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => toggleStatus(plan.id)}
                                        className={`flex-1 py-2 rounded-lg text-sm font-bold text-white transition-colors ${plan.active ? 'bg-slate-400 hover:bg-slate-500' : 'bg-green-500 hover:bg-green-600'
                                            }`}
                                    >
                                        {plan.active ? 'Disable' : 'Enable'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
