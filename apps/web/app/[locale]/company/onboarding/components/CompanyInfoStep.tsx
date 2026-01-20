'use client';

import React, { useState } from 'react';

interface Props {
    onComplete: (data: any) => void;
    onBack: () => void;
}

export const CompanyInfoStep: React.FC<Props> = ({ onComplete, onBack }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        industry: '',
        website: '',
        location: '',
        size: '1-10',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (!formData.companyName || !formData.industry) return;
        onComplete(formData);
    };

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Basic Information</h2>
            <p className="text-slate-500 dark:text-slate-400">Tell us about your company.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Company Name</label>
                    <input
                        name="companyName"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Acme Corp"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Industry</label>
                    <select
                        name="industry"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                        value={formData.industry}
                        onChange={handleChange}
                    >
                        <option value="">Select Industry</option>
                        <option value="IT">IT / Software</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Finance">Finance</option>
                        <option value="Service">Service</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Company Size</label>
                    <select
                        name="size"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                        value={formData.size}
                        onChange={handleChange}
                    >
                        <option value="1-10">1-10 Employees</option>
                        <option value="11-50">11-50 Employees</option>
                        <option value="51-200">51-200 Employees</option>
                        <option value="201+">201+ Employees</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Website</label>
                    <input
                        name="website"
                        type="url"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e1e] focus:ring-2 focus:ring-primary outline-none"
                        placeholder="https://example.com"
                        value={formData.website}
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
                    onClick={handleNext}
                    className="flex-1 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-teal-700 transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
