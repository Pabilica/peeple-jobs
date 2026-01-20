'use client';

import React, { useState, useEffect } from 'react';

interface PaymentModalProps {
    planName: string;
    amount: string;
    onClose: () => void;
    onSuccess: () => void;
}

export function PaymentModal({ planName, amount, onClose, onSuccess }: PaymentModalProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [step, setStep] = useState<'details' | 'processing' | 'success' | 'fail'>('details');

    const handlePayment = () => {
        setStep('processing');
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setStep('success');

            // Auto close after success
            setTimeout(() => {
                onSuccess();
            }, 2000);
        }, 2000);
    };

    if (step === 'success') {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center">
                    <div className="size-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-300">
                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Payment Successful!</h3>
                    <p className="text-slate-500 mb-6">You are now subscribed to the {planName}.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                {/* Header */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Secure Payment</h3>
                        <p className="text-xs text-slate-500">Subscribe to {planName}</p>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/20 mb-4">
                        <span className="font-bold text-slate-700 dark:text-slate-300">Total Amount</span>
                        <span className="font-black text-xl text-primary">{amount}</span>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Card Number</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] font-mono text-sm focus:ring-2 focus:ring-primary outline-none"
                            />
                            <span className="material-symbols-outlined absolute left-3 top-3.5 text-slate-400">credit_card</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Expiry Date</label>
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] font-mono text-sm focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">CVC</label>
                            <input
                                type="text"
                                placeholder="123"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] font-mono text-sm focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-teal-700 transition-all active:scale-95 disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2"
                    >
                        {isProcessing ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Processing...
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-[20px]">lock</span>
                                Pay {amount}
                            </>
                        )}
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">security</span>
                        Encrypted and Secure Payment
                    </p>
                </div>
            </div>
        </div>
    );
}
