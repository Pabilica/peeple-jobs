"use client";

import { useTranslations } from 'next-intl';

export function CompanyHeader() {
    const t = useTranslations('CompanyDashboard');

    return (
        <header className="h-16 flex items-center justify-between px-8 bg-surface-light/80 dark:bg-[#1e1e1e]/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shrink-0 z-10 sticky top-0">
            <div className="flex items-center gap-4 lg:hidden">
                <button className="p-2 -ml-2 text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <span className="font-bold text-lg text-slate-900 dark:text-white">Peeple Jobs</span>
            </div>
            <div className="hidden lg:flex items-center text-slate-400 gap-2">
                <span className="material-symbols-outlined text-[20px]">search</span>
                <span className="text-sm">{t('searchPlaceholder')}</span>
            </div>
            <div className="flex items-center gap-3 ml-auto">
                <button className="lg:hidden p-2 text-slate-500">
                    <span className="material-symbols-outlined">search</span>
                </button>
                <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <button className="relative p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                    <span className="material-symbols-outlined text-[22px]">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-accent rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
                </button>
                <button className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[22px]">language</span>
                    <span className="text-xs font-bold">EN</span>
                </button>
            </div>
        </header>
    );
}
