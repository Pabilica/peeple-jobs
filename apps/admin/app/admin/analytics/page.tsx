"use client";

export default function AnalyticsDashboard() {
    return (
        <>
            {/* Page Title Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                        Dashboard Overview
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Good morning, Administrator. Here's what's happening today.
                    </p>
                </div>
                {/* Date Filter Chips */}
                <div className="flex bg-white dark:bg-surface-dark p-1 rounded-xl shadow-sm border border-border-light dark:border-border-dark self-start">
                    <button className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-primary/10 text-primary">
                        Last 30 Days
                    </button>
                    <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                        Q3 2023
                    </button>
                    <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                        Yearly
                    </button>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Stat Card 1 */}
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-xl">
                            <span className="material-symbols-outlined text-primary">
                                group
                            </span>
                        </div>
                        <span className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg text-xs font-bold">
                            <span className="material-symbols-outlined text-[14px] mr-1">
                                trending_up
                            </span>
                            +5.2%
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Total Seekers
                    </p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                        12,450
                    </h3>
                </div>
                {/* Stat Card 2 */}
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-xl">
                            <span className="material-symbols-outlined text-secondary">
                                domain
                            </span>
                        </div>
                        <span className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg text-xs font-bold">
                            <span className="material-symbols-outlined text-[14px] mr-1">
                                trending_up
                            </span>
                            +12%
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Companies
                    </p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                        850
                    </h3>
                </div>
                {/* Stat Card 3 */}
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">
                                work_history
                            </span>
                        </div>
                        <span className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg text-xs font-bold">
                            <span className="material-symbols-outlined text-[14px] mr-1">
                                trending_up
                            </span>
                            +2.4%
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Active Jobs
                    </p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                        3,200
                    </h3>
                </div>
                {/* Stat Card 4 */}
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 size-24 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="p-3 bg-primary/10 rounded-xl">
                            <span className="material-symbols-outlined text-primary">
                                gavel
                            </span>
                        </div>
                        <span className="flex items-center text-secondary bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-lg text-xs font-bold">
                            Needs Action
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium relative z-10">
                        Pending Reviews
                    </p>
                    <h3 className="text-3xl font-bold text-primary dark:text-primary-content mt-1 relative z-10">
                        14
                    </h3>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Growth Chart (Line Chart Representation) */}
                <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
                    <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Platform Growth
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Seekers vs Company Registrations
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium">
                            <div className="flex items-center gap-2">
                                <span className="size-3 rounded-full bg-primary"></span>
                                <span className="text-slate-600 dark:text-slate-300">
                                    Seekers
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="size-3 rounded-full bg-secondary"></span>
                                <span className="text-slate-600 dark:text-slate-300">
                                    Companies
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* SVG Chart Representation */}
                    <div className="w-full h-64 relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400">
                            <div className="border-b border-dashed border-slate-200 dark:border-slate-700 w-full pb-1">
                                20k
                            </div>
                            <div className="border-b border-dashed border-slate-200 dark:border-slate-700 w-full pb-1">
                                15k
                            </div>
                            <div className="border-b border-dashed border-slate-200 dark:border-slate-700 w-full pb-1">
                                10k
                            </div>
                            <div className="border-b border-dashed border-slate-200 dark:border-slate-700 w-full pb-1">
                                5k
                            </div>
                            <div className="border-b border-slate-300 dark:border-slate-600 w-full pb-1">
                                0
                            </div>
                        </div>
                        {/* Chart SVG */}
                        <svg
                            className="absolute inset-0 w-full h-full pt-4 pb-6 overflow-visible"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 100"
                        >
                            {/* Area Gradient Defs */}
                            <defs>
                                <linearGradient
                                    id="gradientPrimary"
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#009485"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop
                                        offset="100%"
                                        stopColor="#009485"
                                        stopOpacity="0"
                                    ></stop>
                                </linearGradient>
                            </defs>
                            {/* Seekers Line */}
                            <path
                                d="M0,80 C10,75 20,60 30,55 C40,50 50,45 60,35 C70,25 80,30 90,20 L100,15"
                                fill="none"
                                stroke="#009485"
                                strokeLinecap="round"
                                strokeWidth="3"
                                vectorEffect="non-scaling-stroke"
                            ></path>
                            <path
                                className="opacity-50"
                                d="M0,80 C10,75 20,60 30,55 C40,50 50,45 60,35 C70,25 80,30 90,20 L100,15 L100,100 L0,100 Z"
                                fill="url(#gradientPrimary)"
                            ></path>
                            {/* Companies Line */}
                            <path
                                d="M0,90 C15,88 30,85 45,80 C60,75 75,70 90,65 L100,60"
                                fill="none"
                                stroke="#E76F51"
                                strokeDasharray="4 2"
                                strokeLinecap="round"
                                strokeWidth="3"
                                vectorEffect="non-scaling-stroke"
                            ></path>
                            {/* Interactive Dots (Visual only) */}
                            <circle
                                cx="30"
                                cy="55"
                                fill="#ffffff"
                                r="3"
                                stroke="#009485"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                                cx="60"
                                cy="35"
                                fill="#ffffff"
                                r="3"
                                stroke="#009485"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                                cx="90"
                                cy="20"
                                fill="#ffffff"
                                r="3"
                                stroke="#009485"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                            ></circle>
                        </svg>
                        {/* X Axis Labels */}
                        <div className="absolute bottom-0 w-full flex justify-between text-xs text-slate-400 pt-2">
                            <span>Jan</span>
                            <span>Mar</span>
                            <span>May</span>
                            <span>Jul</span>
                            <span>Sep</span>
                            <span>Nov</span>
                        </div>
                    </div>
                </div>
                {/* Trends Chart (Bar Chart) */}
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col h-full">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                        Job Trends by Sector
                    </h3>
                    <div className="flex-1 flex flex-col justify-center gap-5">
                        {/* Bar Item */}
                        <div className="group">
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    Manufacturing
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white">
                                    45%
                                </span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: "45%" }}
                                ></div>
                            </div>
                        </div>
                        {/* Bar Item */}
                        <div className="group">
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    Construction
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white">
                                    28%
                                </span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary/70 rounded-full"
                                    style={{ width: "28%" }}
                                ></div>
                            </div>
                        </div>
                        {/* Bar Item */}
                        <div className="group">
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    Service &amp; Hospitality
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white">
                                    15%
                                </span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-secondary rounded-full"
                                    style={{ width: "15%" }}
                                ></div>
                            </div>
                        </div>
                        {/* Bar Item */}
                        <div className="group">
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    Agriculture
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white">
                                    12%
                                </span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-secondary/70 rounded-full"
                                    style={{ width: "12%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700">
                        <a
                            className="text-sm text-primary font-semibold hover:underline flex items-center gap-1"
                            href="#"
                        >
                            View full report{" "}
                            <span className="material-symbols-outlined text-[16px]">
                                arrow_forward
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Pending Approvals Section */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border-light dark:border-border-dark flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Pending Company Approvals
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Companies awaiting document verification
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            Filter List
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Company Name</th>
                                <th className="px-6 py-4">Industry</th>
                                <th className="px-6 py-4">Registration Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="size-10 rounded-lg bg-slate-200 dark:bg-slate-700 bg-cover bg-center flex-shrink-0"
                                            data-alt="Logo of Samsung Engineering"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArzYvPhTon1EhCg7LiHU5ipgx6d9YJpBcRC72wz9-lu1BuIOushN1SIwEapM8ju5ivD_5Hyex3MnbhvoUZ6KggwBiBjyqm4VwClr_kwt0kxA0CW8TLR_WJUy3A38Clw7MsLMaKwz3Uqor6Vf2RJigRJu3yMH-LLYFStHVJuVhkG2ZcHN3Y2-F3NVZLXaZu525y8-92OyrOAQ5NINOoDHEs2ObjSHADCD3bxrIm19dBijqDH4jcM3gKZ4jJyBsYktGQCkaabiu7Lh8")',
                                            }}
                                        ></div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">
                                                Samsung Engineering
                                            </p>
                                            <p className="text-xs">ID: #C-99281</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">Manufacturing</td>
                                <td className="px-6 py-4">2 hours ago</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                                        <span className="size-1.5 rounded-full bg-amber-500"></span>
                                        Pending Review
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            className="p-2 text-slate-400 hover:text-primary transition-colors"
                                            title="View Documents"
                                        >
                                            <span className="material-symbols-outlined">
                                                description
                                            </span>
                                        </button>
                                        <button className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-colors">
                                            Approve
                                        </button>
                                        <button className="px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
                                            Reject
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="size-10 rounded-lg bg-slate-200 dark:bg-slate-700 bg-cover bg-center flex-shrink-0"
                                            data-alt="Logo of Busan Logistics"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3iSI5CYcbV4z_JD7EVT72cf3Vjf5SxqZ3OLnARPguJ3h65g9C0uzUThF9ZP4pBJwoEnZNVK48VaiA-nzm2tjzaHv-S52b-ZsIFtuiOg0PFOpMw1B7gIvDa7LEeZadXUbHn-BA-M5XmVf7MkDrAR5SdLcULbCbsWN-SgC7Bq1vPzvnnnRl5UGpNCUJI89MkcHjfuZoARwQtMObfuNm69YdxlRCQ_U4Ulhr0HKiIxplRkwPEgLpY4bq_y5rqIftTwk2aHIehL-jhQs")',
                                            }}
                                        ></div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">
                                                Busan Logistics Co.
                                            </p>
                                            <p className="text-xs">ID: #C-99242</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">Logistics</td>
                                <td className="px-6 py-4">5 hours ago</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                                        <span className="size-1.5 rounded-full bg-amber-500"></span>
                                        Pending Review
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            className="p-2 text-slate-400 hover:text-primary transition-colors"
                                            title="View Documents"
                                        >
                                            <span className="material-symbols-outlined">
                                                description
                                            </span>
                                        </button>
                                        <button className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-colors">
                                            Approve
                                        </button>
                                        <button className="px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
                                            Reject
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-lg flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex-shrink-0">
                                            <span className="font-bold text-lg">H</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">
                                                Hanaro Tech
                                            </p>
                                            <p className="text-xs">ID: #C-99105</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">Technology</td>
                                <td className="px-6 py-4">Yesterday</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                        <span className="size-1.5 rounded-full bg-red-500"></span>
                                        Missing Docs
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            className="p-2 text-slate-400 hover:text-primary transition-colors"
                                            title="View Documents"
                                        >
                                            <span className="material-symbols-outlined">
                                                description
                                            </span>
                                        </button>
                                        <button
                                            className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed text-xs font-bold rounded-lg"
                                            disabled
                                        >
                                            Approve
                                        </button>
                                        <button className="px-3 py-1.5 bg-secondary text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition-colors">
                                            Request Info
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-border-light dark:border-border-dark flex justify-center">
                    <button className="text-sm font-semibold text-primary hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                        View All Pending Requests
                    </button>
                </div>
            </div>
        </>
    );
}
