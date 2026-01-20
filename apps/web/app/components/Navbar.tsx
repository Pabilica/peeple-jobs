"use client";

import React from 'react';
import { Link, usePathname, useRouter } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';

export const Navbar = () => {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = () => {
        const nextLocale = locale === 'en' ? 'ko' : 'en';
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined">work</span>
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-text-main dark:text-white">Peeple Jobs</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { href: '/jobs', label: t('jobs') },
                            { href: '/dashboard', label: t('dashboard') },
                            { href: '/interviews', label: t('interviews') },
                            { href: '/community', label: t('community') },
                            { href: '/chat', label: t('chat') },
                            { href: '/resume', label: t('resume') },
                        ].map((link) => {
                            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive
                                        ? 'text-primary font-bold'
                                        : 'text-text-main hover:text-primary dark:text-gray-300'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {/* Language Selector */}
                        <button
                            onClick={switchLocale}
                            className="hidden sm:flex items-center gap-1 text-sm font-medium text-text-main dark:text-white px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">language</span>
                            <span>{locale === 'en' ? 'EN' : 'KO'}</span>
                            <span className="material-symbols-outlined text-sm">swap_horiz</span>
                        </button>
                        <Link href="/login" className="hidden sm:block text-sm font-bold text-text-main dark:text-white hover:text-primary px-3 transition-colors">
                            {t('signIn')}
                        </Link>
                        <Link href="/company/dashboard" className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                            {t('postJob')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
