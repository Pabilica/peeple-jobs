'use client';

import React, { useState } from 'react';

interface Props {
    onComplete: (data: any) => void;
}

export const BusinessVerificationStep: React.FC<Props> = ({ onComplete }) => {
    const [bizNumber, setBizNumber] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [repName, setRepName] = useState('');

    const handleVerify = () => {
        if (bizNumber.length < 10) {
            alert('Please enter a valid 10-digit business registration number.');
            return;
        }
        setIsVerifying(true);

        // Mock API call
        setTimeout(() => {
            setIsVerifying(false);
            setIsVerified(true);
            alert('Business Verified Successfully! (Mock)');
        }, 1500);
    };

    const handleNext = () => {
        if (!isVerified || !repName) return;
        onComplete({ bizNumber, repName });
    };

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Business Verification</h2>
            <p className="text-slate-500 dark:text-slate-400">Please verify your business registration number to continue.</p>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Business Registration Number</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            className="flex-grow px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                            placeholder="123-45-67890"
                            value={bizNumber}
                            onChange={(e) => setBizNumber(e.target.value)}
                            disabled={isVerified}
                        />
                        <button
                            onClick={handleVerify}
                            disabled={isVerifying || isVerified}
                            className={`px-5 rounded-xl font-bold transition-colors ${isVerified ? 'bg-green-500 text-white' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'}`}
                        >
                            {isVerifying ? 'Verifying...' : isVerified ? 'Verified' : 'Verify'}
                        </button>
                    </div>
                </div>

                {isVerified && (
                    <div className="animate-fade-in-up">
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Representative Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Hong Gil Dong"
                            value={repName}
                            onChange={(e) => setRepName(e.target.value)}
                        />
                    </div>
                )}
            </div>

            <button
                onClick={handleNext}
                disabled={!isVerified || !repName}
                className="w-full py-4 mt-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Confirm & Continue
            </button>
        </div>
    );
};
