import React from 'react';
import Link from 'next/link';

const ITEREST_COMPANIES = [
    {
        id: 'comp-1',
        name: 'Kakao Corp',
        industry: 'IT / Internet',
        description: 'Building a better world with people and technology.',
        logo: 'K',
        logoColor: 'text-yellow-900',
        bg: 'bg-yellow-400',
        activeJobs: 12,
    },
    {
        id: 'comp-2',
        name: 'Naver',
        industry: 'IT / Internet',
        description: 'A global ICT company providing services like search, commerce, and contents.',
        logo: 'N',
        logoColor: 'text-white',
        bg: 'bg-green-500',
        activeJobs: 8,
    }
];

export const InterestCompanies = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Following Companies ({ITEREST_COMPANIES.length})</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ITEREST_COMPANIES.map((company) => (
                    <div key={company.id} className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all relative">
                        <button className="absolute top-4 right-4 text-primary hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-[20px] font-variation-FILL">favorite</span>
                        </button>
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-14 h-14 rounded-xl ${company.bg} flex items-center justify-center font-black text-2xl ${company.logoColor}`}>
                                {company.logo}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-lg">{company.name}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{company.industry}</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 h-10">
                            {company.description}
                        </p>
                        <Link href={`/jobs?company=${company.id}`} className="block w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm text-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                            View {company.activeJobs} Jobs
                        </Link>
                    </div>
                ))}
            </div>
            {ITEREST_COMPANIES.length === 0 && (
                <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">favorite_border</span>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Not following any companies yet.</p>
                </div>
            )}
        </div>
    );
};
