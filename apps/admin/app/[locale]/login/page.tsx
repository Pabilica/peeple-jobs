"use client";

import React, { useState } from "react";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";

export default function AdminLoginPage() {
    const router = useRouter();
    const t = useTranslations('Auth');
    const tCommon = useTranslations('Common');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock Login Logic
        if (email === "admin@peeple.com" && password === "admin") {
            router.push("/admin/dashboard"); // Redirect to Dashboard
        } else {
            alert("Invalid credentials. Try admin@peeple.com / admin");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface-ground">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200 dark:border-slate-700">
                <div className="text-center mb-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="material-symbols-outlined text-primary text-3xl">admin_panel_settings</span>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('loginTitle')}</h1>
                    <p className="text-slate-500 text-sm mt-2">{t('footerText')}</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t('emailLabel')}</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="admin@peeple.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t('passwordLabel')}</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                    >
                        {t('signIn')}
                    </button>
                </form>
            </div>
        </div>
    );
}
