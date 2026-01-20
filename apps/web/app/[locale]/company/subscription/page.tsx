'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PaymentModal } from './components/PaymentModal';

const PLANS = [
    {
        id: 'free',
        name: 'Free Starter',
        price: 'Free',
        priceDetail: 'Forever free',
        features: ['1 Active Job Posting', 'Basic Candidate Management', 'Community Access'],
        recommended: false,
        buttonText: 'Current Plan',
        current: true,
    },
    {
        id: 'standard',
        name: 'Standard Growth',
        price: '$49',
        priceDetail: 'per month',
        features: ['5 Active Job Postings', 'Advanced Analytics', 'Priority Support', 'Verified Company Badge'],
        recommended: true,
        buttonText: 'Upgrade to Standard',
        current: false,
    },
    {
        id: 'premium',
        name: 'Premium Scale',
        price: '$199',
        priceDetail: 'per month',
        features: ['Unlimited Job Postings', 'Dedicated Account Manager', 'API Access', 'Featured Job Listings'],
        recommended: false,
        buttonText: 'Upgrade to Premium',
        current: false,
    }
];

export default function SubscriptionPage() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState<typeof PLANS[0] | null>(null);

    const handleSelectPlan = (plan: typeof PLANS[0]) => {
        if (plan.current) return;
        setSelectedPlan(plan);
    };

    const handleSuccess = () => {
        setSelectedPlan(null);
        // Mock success scenario - simulate redirect or state update
        alert('Plan upgraded successfully! Redirecting to settings...');
        router.push('/company/settings');
    };

    return (
        <div className="bg-slate-50 dark:bg-black min-h-screen font-display pb-20">
            {/* Header */}
            <header className="bg-white dark:bg-[#1e1e1e] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/company/settings" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                        <span className="font-bold">Back to Settings</span>
                    </Link>
                    <h1 className="text-lg font-bold text-slate-900 dark:text-white">Subscription Plans</h1>
                    <div className="w-20"></div> {/* Spacer */}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Choose the Right Plan for Your Growth</h2>
                    <p className="text-slate-500 text-lg">Scale your recruitment with our flexible pricing plans. Cancel anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white dark:bg-[#1e1e1e] rounded-3xl p-8 border transition-all duration-300 flex flex-col ${plan.recommended ? 'border-primary shadow-xl shadow-primary/10 scale-105 z-10' : 'border-slate-200 dark:border-slate-800 hover:border-primary/50'}`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                                    <span className="text-sm text-slate-500">{plan.priceDetail}</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                                        <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleSelectPlan(plan)}
                                disabled={plan.current}
                                className={`w-full py-3.5 rounded-xl font-bold transition-all ${plan.current
                                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-default'
                                        : plan.recommended
                                            ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-teal-700 active:scale-95'
                                            : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 active:scale-95'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            {/* Payment Modal */}
            {selectedPlan && (
                <PaymentModal
                    planName={selectedPlan.name}
                    amount={selectedPlan.price}
                    onClose={() => setSelectedPlan(null)}
                    onSuccess={handleSuccess}
                />
            )}
        </div>
    );
}
