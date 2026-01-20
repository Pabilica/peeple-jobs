"use client";

import React from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <header className="relative w-full pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        {t('badge')}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white tracking-tight leading-[1.1] mb-6">
                        {t('titlePrefix')} <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">{t('titleHighlight')}</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-text-muted dark:text-gray-300 max-w-2xl mb-10 leading-relaxed">
                        {t('subtitle')}
                    </p>
                    {/* Floating Search Bar */}
                    <div className="w-full max-w-4xl bg-surface-light dark:bg-surface-dark p-3 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-gray-700 flex flex-col md:flex-row items-center gap-3 md:gap-0">
                        {/* Keyword Input */}
                        <div className="flex-1 w-full relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="w-full h-14 pl-12 pr-4 bg-transparent border-none outline-none focus:ring-0 text-text-main dark:text-white placeholder-gray-400 text-base md:border-r border-gray-100 dark:border-gray-700 rounded-xl md:rounded-none md:rounded-l-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                placeholder={t('searchPlaceholder')}
                                type="text"
                            />
                        </div>
                        {/* Location Input */}
                        <div className="flex-1 w-full relative group border-t md:border-t-0 border-gray-100 dark:border-gray-700 md:border-l">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <select className="w-full h-14 pl-12 pr-10 bg-transparent border-none outline-none focus:ring-0 text-text-main dark:text-white text-base appearance-none cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-xl md:rounded-none" defaultValue="">
                                <option className="text-gray-400" disabled value="">{t('selectLocation')}</option>
                                <option value="seoul">Seoul</option>
                                <option value="busan">Busan</option>
                                <option value="incheon">Incheon</option>
                                <option value="gyeonggi">Gyeonggi-do</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </div>
                        </div>
                        {/* Visa Select */}
                        <div className="flex-1 w-full relative group border-t md:border-t-0 border-gray-100 dark:border-gray-700 md:border-l">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                                <span className="material-symbols-outlined">badge</span>
                            </div>
                            <select className="w-full h-14 pl-12 pr-10 bg-transparent border-none outline-none focus:ring-0 text-text-main dark:text-white text-base appearance-none cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-xl md:rounded-none" defaultValue="">
                                <option disabled value="">{t('visaType')}</option>
                                <option value="e7">E-7 (Specific Activity)</option>
                                <option value="f2">F-2 (Resident)</option>
                                <option value="f4">F-4 (Overseas Korean)</option>
                                <option value="f6">F-6 (Marriage Migrant)</option>
                                <option value="d10">D-10 (Job Seeker)</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </div>
                        </div>
                        {/* Search Button */}
                        <div className="p-1 w-full md:w-auto">
                            <button className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2">
                                <span>{t('searchButton')}</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-text-muted dark:text-gray-400">
                        <span>{t('popular')}</span>
                        <Link className="underline decoration-gray-300 hover:text-primary transition-colors" href="#">English Teacher</Link>
                        <Link className="underline decoration-gray-300 hover:text-primary transition-colors" href="#">Frontend Developer</Link>
                        <Link className="underline decoration-gray-300 hover:text-primary transition-colors" href="#">Factory Worker</Link>
                        <Link className="underline decoration-gray-300 hover:text-primary transition-colors" href="#">Marketing</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
