'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CreateJobPage() {
    const [lang, setLang] = useState<'en' | 'ko'>('en');

    // State for form fields (Simplified for demo)
    const [formData, setFormData] = useState({
        en: { title: '', description: '', requirements: '', benefits: '' },
        ko: { title: '', description: '', requirements: '', benefits: '' },
        common: { location: '', type: 'Full-time', salary: '', visa: false }
    });

    const handleTextChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [lang]: { ...prev[lang], [field]: value }
        }));
    };

    const handleCommonChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            common: { ...prev.common, [field]: value }
        }));
    };

    return (
        <div className="bg-slate-50 dark:bg-black min-h-screen font-display pb-20">
            {/* Header */}
            <header className="bg-white dark:bg-[#1e1e1e] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/company/postings" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </Link>
                        <h1 className="text-lg font-bold text-slate-900 dark:text-white">Create New Job Posting</h1>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-slate-600 dark:text-slate-400 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Save Draft</button>
                        <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/30 hover:bg-teal-700">Publish</button>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

                {/* Language Tabs */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex bg-white dark:bg-[#1e1e1e] p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <button
                            onClick={() => setLang('en')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${lang === 'en' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => setLang('ko')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${lang === 'ko' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                        >
                            Korean (한국어)
                        </button>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                        Fill in both languages for better reach.
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Editor */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className={`fi fi-${lang === 'en' ? 'us' : 'kr'} rounded-sm`}></span>
                                {lang === 'en' ? 'Job Details (English)' : '공고 상세 (한국어)'}
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Job Title / 공고 제목</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                                        placeholder={lang === 'en' ? "e.g. Senior Frontend Engineer" : "예: 프론트엔드 시니어 개발자"}
                                        value={formData[lang].title}
                                        onChange={(e) => handleTextChange('title', e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Job Description / 직무 설명</label>
                                    <textarea
                                        rows={8}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                                        placeholder={lang === 'en' ? "Describe the role, responsibilities, and team culture..." : "직무, 책임, 팀 문화 등을 설명해주세요..."}
                                        value={formData[lang].description}
                                        onChange={(e) => handleTextChange('description', e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Requirements / 자격 요건</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                                        placeholder={lang === 'en' ? "- 3+ years of experience with React..." : "- React 실무 경험 3년 이상..."}
                                        value={formData[lang].requirements}
                                        onChange={(e) => handleTextChange('requirements', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Common Settings) */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Common Settings</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Location</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="Seoul, Gangnam"
                                        value={formData.common.location}
                                        onChange={(e) => handleCommonChange('location', e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Employment Type</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                                        value={formData.common.type}
                                        onChange={(e) => handleCommonChange('type', e.target.value)}
                                    >
                                        <option value="Full-time">Full-time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Salary Range</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="e.g. 50M - 70M KRW"
                                        value={formData.common.salary}
                                        onChange={(e) => handleCommonChange('salary', e.target.value)}
                                    />
                                </div>

                                <div className="pt-2">
                                    <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 rounded text-primary focus:ring-primary"
                                            checked={formData.common.visa}
                                            onChange={(e) => handleCommonChange('visa', e.target.checked)}
                                        />
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900 dark:text-white">Visa Sponsorship</span>
                                            <span className="block text-xs text-slate-500">Provide visa support for foreigners</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
