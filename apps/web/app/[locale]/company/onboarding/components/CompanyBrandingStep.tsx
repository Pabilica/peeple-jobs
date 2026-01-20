'use client';

import React, { useState } from 'react';

interface Props {
    onComplete: (data: any) => void;
    onBack: () => void;
}

export const CompanyBrandingStep: React.FC<Props> = ({ onComplete, onBack }) => {
    const [formData, setFormData] = useState({
        slogan: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        onComplete(formData);
    };

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Company Profile</h2>
            <p className="text-slate-500 dark:text-slate-400">Make your company stand out to candidates.</p>

            <div className="space-y-4">
                {/* Logo Upload Placeholder */}
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Company Logo</label>
                    <div className="h-32 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:border-primary hover:text-primary transition-colors bg-white dark:bg-[#1e1e1e]">
                        <span className="material-symbols-outlined text-3xl mb-2">cloud_upload</span>
                        <span className="text-sm font-medium">Click to upload logo</span>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Company Slogan (One-liner)</label>
                    <input
                        name="slogan"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Innovating the Future of Work"
                        value={formData.slogan}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Company Introduction</label>
                    <textarea
                        name="description"
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none resize-none"
                        placeholder="Describe your company culture, mission, and what makes you unique..."
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex gap-4 mt-4">
                <button
                    onClick={onBack}
                    className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={handleSubmit}
                    className="flex-1 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-teal-700 transition-colors"
                >
                    Complete Registration
                </button>
            </div>
        </div>
    );
};
