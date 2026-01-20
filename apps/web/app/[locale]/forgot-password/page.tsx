"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-surface-ground">
            <Navbar />
            <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
                <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100 dark:border-slate-800">
                    {!submitted ? (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Reset Password</h1>
                                <p className="text-slate-500 text-sm mt-2">Enter your email and we'll send you a link to reset your password.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                                >
                                    Send Reset Link
                                </button>
                            </form>
                            <div className="mt-6 text-center">
                                <Link href="/login" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">
                                    Back to Sign In
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-3xl">mark_email_read</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Check your email</h2>
                            <p className="text-slate-500 text-sm mb-8">
                                We have sent a password reset link to <br />
                                <span className="font-bold text-slate-900 dark:text-white">{email}</span>
                            </p>
                            <Link
                                href="/login"
                                className="inline-block w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                Back to Sign In
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
