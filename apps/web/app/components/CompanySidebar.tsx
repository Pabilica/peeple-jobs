"use client";

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export function CompanySidebar() {
    const t = useTranslations('CompanyDashboard');

    return (
        <aside className="hidden lg:flex w-72 flex-col bg-surface-light dark:bg-[#1e1e1e] border-r border-slate-100 dark:border-slate-800 h-full transition-colors duration-200 z-20">
            <div className="p-6 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-white shadow-glow">
                    <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                    <Link href="/" className="font-bold text-lg tracking-tight text-slate-900 dark:text-white leading-none hover:opacity-80 transition-opacity">
                        Peeple Jobs
                    </Link>
                    <p className="text-xs text-slate-400 font-medium mt-1">{t('recruiterPortal')}</p>
                </div>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group text-slate-500 dark:text-slate-400" href="/company/dashboard">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
                    <span>{t('dashboard')}</span>
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group" href="/company/postings">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">work</span>
                    <span>{t('jobs')}</span>
                    <span className="ml-auto bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full">8</span>
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group" href="/company/applicants">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">group</span>
                    <span>{t('candidates')}</span>
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group" href="/company/chat">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat_bubble</span>
                    <span>{t('messages')}</span>
                    <span className="ml-auto bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group" href="/company/settings">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">apartment</span>
                    <span>{t('companyProfile')}</span>
                </Link>
            </nav>
            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-xl p-4 text-white relative overflow-hidden group cursor-pointer">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-4xl">verified_user</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-1">{t('visaCompliance')}</p>
                    <div className="flex items-end justify-between">
                        <span className="font-bold text-lg">98% {t('score')}</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-6 px-2">
                    <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXYW4AceDPCjK7JN5kR_BxxTyIEw08L9Q5G8sF9-QsN11p53IlanLZCMETOzOnROLj6rgE0gLapkE57cTwSrn1_XtF0HB1A5xhv9WLcDkMmOVqSYiY5SMC0NwqPOVLfyj84EUGM0hSnasdL78HhqFttKmwoC6StCGg_94XI4xqqQ9BMRoxZ_4aPaRkWGd7sX8YMvgcO15WB4MJ22x52khq1yIDWNHNwidjRpwokbnQ6VW5FJIbitpx0ylk0NFWUxnLjmL7GZy4d58')" }}></div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">TechCorp HR</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">admin@techcorp.kr</p>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
