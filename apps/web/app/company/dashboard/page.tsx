'use client';

import React from 'react';
import Link from 'next/link';

export default function CompanyDashboardPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-800 dark:text-slate-100">
            <div className="flex h-screen w-full overflow-hidden">
                {/* Sidebar Placeholder */}
                <aside className="hidden lg:flex w-72 flex-col bg-surface-light dark:bg-[#1e1e1e] border-r border-slate-100 dark:border-slate-800 h-full transition-colors duration-200 z-20">
                    <div className="p-6 flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-white shadow-glow">
                            <span className="material-symbols-outlined">public</span>
                        </div>
                        <div>
                            <Link href="/" className="font-bold text-lg tracking-tight text-slate-900 dark:text-white leading-none hover:opacity-80 transition-opacity">
                                Peeple Jobs
                            </Link>
                            <p className="text-xs text-slate-400 font-medium mt-1">Recruiter Portal</p>
                        </div>
                    </div>
                    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold transition-all" href="#">
                            <span className="material-symbols-outlined icon-filled">dashboard</span>
                            <span>Dashboard</span>
                        </a>
                        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group" href="/company/postings">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">work</span>
                            <span>Jobs</span>
                            <span className="ml-auto bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full">8</span>
                        </Link>
                        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group" href="/company/applicants">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">group</span>
                            <span>Candidates</span>
                        </Link>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group" href="#">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat_bubble</span>
                            <span>Messages</span>
                            <span className="ml-auto bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all font-medium group" href="#">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">apartment</span>
                            <span>Company Profile</span>
                        </a>
                    </nav>
                    <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-xl p-4 text-white relative overflow-hidden group cursor-pointer">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-4xl">verified_user</span>
                            </div>
                            <p className="text-xs text-slate-300 mb-1">Visa Compliance</p>
                            <div className="flex items-end justify-between">
                                <span className="font-bold text-lg">98% Score</span>
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

                {/* Main Content Placeholder */}
                <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                    {/* Top Navbar */}
                    <header className="h-16 flex items-center justify-between px-8 bg-surface-light/80 dark:bg-[#1e1e1e]/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shrink-0 z-10 sticky top-0">
                        <div className="flex items-center gap-4 lg:hidden">
                            <button className="p-2 -ml-2 text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                            <span className="font-bold text-lg text-slate-900 dark:text-white">Peeple Jobs</span>
                        </div>
                        <div className="hidden lg:flex items-center text-slate-400 gap-2">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                            <span className="text-sm">Cmd + K to search...</span>
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

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-background-light dark:bg-background-dark p-6 lg:p-10 pb-20">
                        <div className="max-w-[1280px] mx-auto space-y-8">
                            {/* Page Heading */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Good morning, TechCorp</h2>
                                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">Here is your hiring pipeline update for Seoul & Busan branches.</p>
                                </div>
                                <Link href="/company/postings/create" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 whitespace-nowrap">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    Post a New Job
                                </Link>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                                {/* Active Postings */}
                                <div className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft group hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                                            <span className="material-symbols-outlined">campaign</span>
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-md">Live</span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Postings</p>
                                    <div className="flex items-end gap-3 mt-1">
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">8</h3>
                                        <p className="text-sm font-semibold text-slate-400 mb-1.5 flex items-center">
                                            <span className="material-symbols-outlined text-base mr-0.5">remove</span>
                                            0% vs last week
                                        </p>
                                    </div>
                                </div>

                                {/* New Applicants */}
                                <div className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft group hover:border-primary/30 transition-colors relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 size-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                            <span className="material-symbols-outlined">person_add</span>
                                        </div>
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">Trending</span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 relative z-10">New Applicants</p>
                                    <div className="flex items-end gap-3 mt-1 relative z-10">
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">42</h3>
                                        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center">
                                            <span className="material-symbols-outlined text-base mr-0.5">trending_up</span>
                                            +15% vs last week
                                        </p>
                                    </div>
                                </div>

                                {/* Interviewing */}
                                <div className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft group hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                                            <span className="material-symbols-outlined">video_camera_front</span>
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-md">This Week</span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Interviewing</p>
                                    <div className="flex items-end gap-3 mt-1">
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">12</h3>
                                        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center">
                                            <span className="material-symbols-outlined text-base mr-0.5">trending_up</span>
                                            +4% vs last week
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Main Bento Layout */}
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                                {/* Recent Applicants Table (Col Span 2) */}
                                <div className="xl:col-span-2 bg-surface-light dark:bg-[#1e1e1e] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft flex flex-col">
                                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Applicants</h3>
                                        <button className="text-sm font-semibold text-primary hover:text-primary/80">View All</button>
                                    </div>
                                    <div className="overflow-x-auto p-2">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="text-xs font-bold text-slate-400 border-b border-dashed border-slate-200 dark:border-slate-800">
                                                    <th className="px-4 py-3">Candidate</th>
                                                    <th className="px-4 py-3">Visa Status</th>
                                                    <th className="px-4 py-3">Applied For</th>
                                                    <th className="px-4 py-3">Date</th>
                                                    <th className="px-4 py-3 text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                {/* Row 1 */}
                                                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYDMPt3wL6XhvZUofryIE3gKEv-puAVpJc8N5gYEBPM2-SRbTiAETQXy9N38b1yqlJGQZ25OgqYWz7u_c9hfuaMWZgir7UYaUfEDiX00_0PA2Z4rQ5LX_0zWdLMgaNivWqUsbWI6E1MHhfTmLZmaSzVan79b337pQR9t0_Mfzxaly4wSd2R--v0u1q_KI14b4UuKzZPLAhSufeXNGjYm36uhvUP1VL0jOcVRvdyHYIRPASpnXFeRJXRYnGdZ59XwmG44UB2H2muUQ')" }}></div>
                                                            <div>
                                                                <p className="font-bold text-slate-900 dark:text-white">Min-ji Kim</p>
                                                                <p className="text-xs text-slate-500">Seoul, KR</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                                            <span className="size-1.5 rounded-full bg-emerald-500"></span>
                                                            F-4 Resident
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-300 font-medium">Marketing Manager</td>
                                                    <td className="px-4 py-4 text-slate-500">2h ago</td>
                                                    <td className="px-4 py-4 text-right">
                                                        <button className="size-8 inline-flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-colors">
                                                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 2 */}
                                                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByrpGx3eg8QAKwAfzB43xGteGymAOYvjn4zzWlV-_vwHWuw5-ckPO6yzr-ia4T-Mwm95DJuBgN2IP7ddrnJz_LFi9RxZvJ3bO9n1LX2_Fq-1PJvP8xcqn6OkUT2gQa1KL884tjzKODmTN--2W9M0dh3hVl5ZDVA60_gl4smP-4U13Am5Xnv3loxwVaCovtjskYgL-gJf6PwvJD7dLD3SoHo7qF5J8wkbe43C1K89s3KXm_bFPU0QST7Pr6ksi9_xaby5HCIH-8OkU')" }}></div>
                                                            <div>
                                                                <p className="font-bold text-slate-900 dark:text-white">John Smith</p>
                                                                <p className="text-xs text-slate-500">Busan, KR</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                                                            <span className="size-1.5 rounded-full bg-blue-500"></span>
                                                            E-7 Special Activity
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-300 font-medium">English Content Lead</td>
                                                    <td className="px-4 py-4 text-slate-500">5h ago</td>
                                                    <td className="px-4 py-4 text-right">
                                                        <button className="size-8 inline-flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-colors">
                                                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 3 */}
                                                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7n_80HCnPT75H1QOTLnScCuDzLPGSGDnVoKMlBaRcUVAQ-a3Z-TpOWUwCOhGv3lgig9LGXV0qB2lOxxU_ZqubCWDJXosEmBeohdkZh_EcjyAbgfxgBlUGeQ20aZ7JGaSouMG3WqotMUVbHL9zMU_rCBomQLb9sm2HNtqRrqUR8ovgA6xy53o5MwxcnfO5A9acOu3eRnuTR5znKoo9JDAGCil10Z4-U-S4lT_C4ubltuhhInjtUZ83XaA6v9thH73nx7ZP-mWxdg')" }}></div>
                                                            <div>
                                                                <p className="font-bold text-slate-900 dark:text-white">Ali Hassan</p>
                                                                <p className="text-xs text-slate-500">Incheon, KR</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                                                            <span className="size-1.5 rounded-full bg-amber-500"></span>
                                                            D-10 Job Seeker
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-300 font-medium">Sales Associate</td>
                                                    <td className="px-4 py-4 text-slate-500">1d ago</td>
                                                    <td className="px-4 py-4 text-right">
                                                        <button className="size-8 inline-flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-colors">
                                                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 4 */}
                                                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBo0lfN96FWIb1VdhKqW1ro9Zb_saeTm86Ya6uqyHlDonyy_MY4c-kie5nIF41CDvpthEv3WJtJp-RVQlkQbe3aKEyVlK2Fgcb3b18tifkrK1vcnq-T-XSm6y5kCFLW6MzEKuXyrrc2-hZgpLVVwykx43FUt9hMUKB_ZmBUF4aEs0-11JDg_PyJSvwlMrGalW-CfvpIVWZstSI8dPaJaun2I1M0rFTSVpUTG69caKS7nI0U3DZxF2kATHEWMOdNtsAzEEPKNMGGHio')" }}></div>
                                                            <div>
                                                                <p className="font-bold text-slate-900 dark:text-white">Sarah Connor</p>
                                                                <p className="text-xs text-slate-500">Daegu, KR</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent dark:bg-accent/20 border border-accent/20">
                                                            <span className="size-1.5 rounded-full bg-accent"></span>
                                                            Sponsorship Req
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-300 font-medium">UX Designer</td>
                                                    <td className="px-4 py-4 text-slate-500">1d ago</td>
                                                    <td className="px-4 py-4 text-right">
                                                        <button className="size-8 inline-flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-colors">
                                                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Side Column (Charts & Interviews) */}
                                <div className="space-y-6 flex flex-col">
                                    {/* Visa Distribution Chart */}
                                    <div className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft flex-1">
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Visa Distribution</h3>
                                        <p className="text-xs text-slate-500 mb-6">Based on active applicants</p>
                                        <div className="space-y-4">
                                            {/* Chart Bar Item 1 */}
                                            <div className="group">
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <span className="text-slate-700 dark:text-slate-300">F-4 Resident</span>
                                                    <span className="text-primary">45%</span>
                                                </div>
                                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary w-[45%] rounded-full group-hover:bg-emerald-400 transition-colors"></div>
                                                </div>
                                            </div>
                                            {/* Chart Bar Item 2 */}
                                            <div className="group">
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <span className="text-slate-700 dark:text-slate-300">E-7 Special Activity</span>
                                                    <span className="text-blue-500">30%</span>
                                                </div>
                                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 w-[30%] rounded-full group-hover:bg-blue-400 transition-colors"></div>
                                                </div>
                                            </div>
                                            {/* Chart Bar Item 3 */}
                                            <div className="group">
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <span className="text-slate-700 dark:text-slate-300">D-10 Job Seeker</span>
                                                    <span className="text-amber-500">15%</span>
                                                </div>
                                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-amber-500 w-[15%] rounded-full group-hover:bg-amber-400 transition-colors"></div>
                                                </div>
                                            </div>
                                            {/* Chart Bar Item 4 */}
                                            <div className="group">
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <span className="text-slate-700 dark:text-slate-300">H-1 / Student</span>
                                                    <span className="text-slate-400">10%</span>
                                                </div>
                                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-slate-400 w-[10%] rounded-full group-hover:bg-slate-300 transition-colors"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Upcoming Interviews */}
                                    <div className="bg-surface-light dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Interviews</h3>
                                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">Today</span>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div className="flex flex-col items-center justify-center min-w-[50px] bg-slate-50 dark:bg-slate-800 rounded-xl px-2 py-2">
                                                    <span className="text-xs font-bold text-slate-500 uppercase">PM</span>
                                                    <span className="text-lg font-black text-slate-900 dark:text-white">2:00</span>
                                                </div>
                                                <div className="flex-1 border-l-2 border-primary/30 pl-4 py-1">
                                                    <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Frontend Dev Interview</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <div className="size-5 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlQ50GT-Jgw2ZEn0ndDc5-6JLX87b-RlTzxZFm-RZPxnl8xSP_XGQAQyfSNRH0E5W3zfkDfcyCTsjz0CqN4kbXBo6LTyRV1xEJwuP9I6Wxj15BTS3dQ_Gt73UzF_EF4Ragxz7J0_EIQHHe_U0cvN1NbtQtg_UTJPgmVgiL18YYEIYJdGmY6CKWX5eHQZOyKCZtpkA7Fq3QbORu8t73C_z6z3jHmaubdsnBC36yoEIyZizW0zYf78sMRPXMzqzW5E7NYSv4Tz25q6M')" }}></div>
                                                        <span className="text-xs text-slate-500">w/ Alex Chen</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 opacity-60">
                                                <div className="flex flex-col items-center justify-center min-w-[50px] bg-slate-50 dark:bg-slate-800 rounded-xl px-2 py-2">
                                                    <span className="text-xs font-bold text-slate-500 uppercase">PM</span>
                                                    <span className="text-lg font-black text-slate-900 dark:text-white">4:30</span>
                                                </div>
                                                <div className="flex-1 border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-1">
                                                    <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Marketing Manager Sync</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <div className="size-5 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDO8Fo-YKbt8NGndXwCluhFvsVR4inHiFLVSJ96YHENezSoYtCc72kcH8Jus8pKr2LY2ckBhedzuTalLZ8YTpST_tmLOT3wlqop5RfFnTgb4Fx7bxLhwHg3ZK4wWmVcFusek_f8VPVJBWiun_TQf9wJ4ZWZ_zq5dpyRKl-wZqgIWkgt_UAS62wxPiO6d4Skw7XKi9s28G3XoFnSZVrOsXzeAaD__nlSJzSUvuxqdyIJjaiuDJAp7te8z39ILQ-VPvkI62KbQGAjLlU')" }}></div>
                                                        <span className="text-xs text-slate-500">w/ Lisa Park</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-full mt-5 py-2 text-xs font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg transition-colors">
                                            View Full Schedule
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
