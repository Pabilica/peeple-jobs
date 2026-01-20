"use client";

import React from 'react';
import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';

export const Footer = () => {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm">work</span>
                            </div>
                            <span className="text-lg font-bold text-text-main dark:text-white">Peeple Jobs</span>
                        </div>
                        <p className="text-sm text-text-muted dark:text-gray-500 mb-4">{t('tagline')}</p>
                        <div className="flex gap-4">
                            <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><i className="fa-brands fa-twitter"></i></Link>
                            <span className="text-gray-400">Instagram</span>
                            <span className="text-gray-400">LinkedIn</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white mb-4">{t('forJobSeekers')}</h4>
                        <ul className="space-y-2 text-sm text-text-muted dark:text-gray-400">
                            <li><Link className="hover:text-primary" href="/jobs">{t('findJobs')}</Link></li>
                            <li><Link className="hover:text-primary" href="#">{t('visaGuide')}</Link></li>
                            <li><Link className="hover:text-primary" href="#">{t('livingInKorea')}</Link></li>
                            <li><Link className="hover:text-primary" href="/community">{t('community')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white mb-4">{t('forEmployers')}</h4>
                        <ul className="space-y-2 text-sm text-text-muted dark:text-gray-400">
                            <li><Link className="hover:text-primary" href="/company/dashboard">{t('postJob')}</Link></li>
                            <li><Link className="hover:text-primary" href="/company/search">{t('talentSearch')}</Link></li>
                            <li><Link className="hover:text-primary" href="#">{t('visaSponsorshipInfo')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white mb-4">{t('language')}</h4>
                        <div className="flex flex-col gap-2">
                            <button onClick={() => switchLocale('en')} className={`text-left text-sm font-medium flex items-center gap-2 ${locale === 'en' ? 'text-primary' : 'text-text-muted hover:text-primary transition-colors'}`}>
                                {locale === 'en' && <span className="material-symbols-outlined text-base">check</span>} English
                            </button>
                            <button onClick={() => switchLocale('ko')} className={`text-left text-sm font-medium flex items-center gap-2 ${locale === 'ko' ? 'text-primary' : 'text-text-muted hover:text-primary transition-colors'}`}>
                                {locale === 'ko' && <span className="material-symbols-outlined text-base">check</span>} Korean (한국어)
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>{t('copyright')}</p>
                    <div className="flex gap-6">
                        <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="/privacy">{t('privacyPolicy')}</Link>
                        <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="/terms">{t('termsOfService')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
