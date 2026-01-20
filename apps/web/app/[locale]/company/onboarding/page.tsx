'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BusinessVerificationStep } from './components/BusinessVerificationStep';
import { CompanyInfoStep } from './components/CompanyInfoStep';
import { CompanyBrandingStep } from './components/CompanyBrandingStep';
import Link from 'next/link';

export default function CompanyOnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        bizNumber: '',
        repName: '',
        // Step 2
        companyName: '',
        industry: '',
        size: '',
        website: '',
        location: '',
        // Step 3
        slogan: '',
        description: '',
    });

    const handleStepComplete = (data: any) => {
        const newData = { ...formData, ...data };
        setFormData(newData);

        if (step < 3) {
            setStep(step + 1);
        } else {
            // Submit API Call (Mock)
            console.log('Submitting Company Data:', newData);
            setTimeout(() => {
                alert('Company Registration Completed!');
                router.push('/company/dashboard');
            }, 1000);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-display py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <Link href="/" className="inline-block mb-6">
                        <div className="flex items-center gap-2 justify-center">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">work</span>
                            </div>
                            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Peeple Jobs</span>
                        </div>
                    </Link>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Company Registration</h1>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mt-8 gap-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= i ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                                    {i}
                                </div>
                                {i < 3 && (
                                    <div className={`w-12 h-1 rounded-full mx-2 transition-colors ${step > i ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-white dark:border-slate-800">
                    {step === 1 && <BusinessVerificationStep onComplete={handleStepComplete} />}
                    {step === 2 && <CompanyInfoStep onComplete={handleStepComplete} onBack={handleBack} />}
                    {step === 3 && <CompanyBrandingStep onComplete={handleStepComplete} onBack={handleBack} />}
                </div>
            </div>
        </div>
    );
}
