"use client";

export default function ApprovalsPage() {
    return (
        <div className="mx-auto max-w-[1400px] flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    Company Verification Queue
                </h1>
            </div>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stat Card 1 */}
                <div className="flex flex-col gap-1 rounded-xl bg-surface-light dark:bg-surface-dark p-6 border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
                            Pending Requests
                        </p>
                        <span className="material-symbols-outlined text-orange-500 bg-orange-50 dark:bg-orange-900/20 p-1.5 rounded-lg">
                            pending_actions
                        </span>
                    </div>
                    <div className="flex items-end gap-3 mt-2">
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-none">
                            14
                        </p>
                        <span className="flex items-center text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded-full mb-0.5">
                            <span className="material-symbols-outlined text-[14px] mr-0.5">
                                trending_up
                            </span>{" "}
                            +2%
                        </span>
                    </div>
                </div>
                {/* Stat Card 2 */}
                <div className="flex flex-col gap-1 rounded-xl bg-surface-light dark:bg-surface-dark p-6 border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
                            Avg. Approval Time
                        </p>
                        <span className="material-symbols-outlined text-blue-500 bg-blue-50 dark:bg-blue-900/20 p-1.5 rounded-lg">
                            timer
                        </span>
                    </div>
                    <div className="flex items-end gap-3 mt-2">
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-none">
                            2.5 hrs
                        </p>
                        <span className="text-slate-400 text-xs font-medium mb-1">
                            Target: &lt; 4 hrs
                        </span>
                    </div>
                </div>
                {/* Stat Card 3 */}
                <div className="flex flex-col gap-1 rounded-xl bg-surface-light dark:bg-surface-dark p-6 border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
                            New Today
                        </p>
                        <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">
                            add_business
                        </span>
                    </div>
                    <div className="flex items-end gap-3 mt-2">
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-none">
                            5
                        </p>
                        <span className="flex items-center text-secondary text-xs font-bold bg-secondary/10 px-2 py-1 rounded-full mb-0.5">
                            <span className="material-symbols-outlined text-[14px] mr-0.5">
                                trending_down
                            </span>{" "}
                            -10%
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Table Section */}
            <section className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden">
                {/* Table Tabs & Filter */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-b border-border-light dark:border-border-dark px-6 py-4 gap-4">
                    <div className="flex gap-6 overflow-x-auto w-full sm:w-auto no-scrollbar">
                        <button className="relative pb-3 text-sm font-bold text-slate-900 dark:text-white">
                            Pending Review
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-slate-900 dark:bg-primary rounded-t-full"></span>
                        </button>
                        <button className="pb-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                            Verified
                        </button>
                        <button className="pb-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                            Rejected
                        </button>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="flex items-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center">
                            <span className="material-symbols-outlined text-[18px]">
                                calendar_today
                            </span>
                            <span>Oct 18 - Oct 25</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">
                                filter_list
                            </span>
                            <span className="hidden sm:inline">Filter</span>
                        </button>
                    </div>
                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border-light dark:border-border-dark bg-slate-50/50 dark:bg-slate-800/50">
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Company
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Industry
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    License Doc
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Contact
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Submitted
                                </th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark text-slate-700 dark:text-slate-300">
                            {/* Row 1 */}
                            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-white dark:bg-slate-700 p-1 border border-border-light dark:border-border-dark flex items-center justify-center overflow-hidden">
                                            <img
                                                className="h-full w-full object-contain rounded-md"
                                                alt="TechWin Solutions Logo placeholder"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8blC8GE3QfDpVDs9xm24T6LIjm3LIemY7M5S-LJVFHwDG6cXufdEYfTCyUMyO-853vQjzjjh1unEi8fK-Z47p5-mBX2nbUjB9T-Kki_KXFR0xxIpGzPApXOCDO42FClqmbFgZM95J1dxrBxfl-hdFFhJ-HNahCLdfkN6yO2LFHk5tf9uKZJzO2d8FU8darIvl8xEQaZ05dLhIp8ecZzILcCQSDWjAR8Q1ymHCQxBxXTw004-tkX_20U4slItc3SZe_N2xCsWbXg"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900 dark:text-white text-sm">
                                                TechWin Solutions
                                            </span>
                                            <span className="text-xs text-slate-500">
                                                Reg: 123-45-67890
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20">
                                        IT &amp; Software
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 group/file cursor-pointer">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                                            <span className="material-symbols-outlined text-[18px]">
                                                picture_as_pdf
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium text-slate-900 dark:text-white group-hover/file:text-primary transition-colors">
                                                biz_license_kr.pdf
                                            </span>
                                            <span className="text-[10px] text-slate-500">2.4 MB</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                                            Min-ji Kim
                                        </span>
                                        <span className="text-xs text-slate-500">
                                            +82 10-1234-5678
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-600 dark:text-slate-400">
                                        Oct 24, 2023
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                                            title="Request Info"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                info
                                            </span>
                                        </button>
                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all"
                                            title="Reject"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                close
                                            </span>
                                        </button>
                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                                            title="Approve"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                check
                                            </span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-white dark:bg-slate-700 p-1 border border-border-light dark:border-border-dark flex items-center justify-center overflow-hidden">
                                            <img
                                                className="h-full w-full object-contain rounded-md"
                                                alt="Han River Logistics Logo placeholder"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA20lzumKbOudkSrv4gy6wzVr556r8jTLaMHAeObk1XEaKTTQlOGyf9T7brUs76ChGbXqiexNmdW5E6vkMDrG7b3qVJQp2mQ3xLw9Bza8z6kE0_xaBQ5Idyu9J8HdQGN6ZJaMo9bjdpoGmbvEy44SmdyqxxxU3gDoZ3ubeoO3j6iS6rwysUzxLzuAJVSvG16ytc4c6dvQMfNCV-OMdQhe3pp6HBXl1LrnTAZjPTMDWxC-4Tqzouvj52VHcDpMkgB9Lu6tj63ZErHxY"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900 dark:text-white text-sm">
                                                Han River Logistics
                                            </span>
                                            <span className="text-xs text-slate-500">
                                                Reg: 987-65-43210
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-400/20">
                                        Logistics
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 group/file cursor-pointer">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                            <span className="material-symbols-outlined text-[18px]">
                                                image
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium text-slate-900 dark:text-white group-hover/file:text-primary transition-colors">
                                                scan_001.jpg
                                            </span>
                                            <span className="text-[10px] text-slate-500">1.8 MB</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                                            Dong-wook Park
                                        </span>
                                        <span className="text-xs text-slate-500">
                                            +82 10-9876-5432
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-slate-600 dark:text-slate-400">
                                        Oct 24, 2023
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                                            title="Request Info"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                info
                                            </span>
                                        </button>
                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all"
                                            title="Reject"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                close
                                            </span>
                                        </button>
                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                                            title="Approve"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                check
                                            </span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-border-light dark:border-border-dark px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Showing{" "}
                        <span className="font-bold text-slate-900 dark:text-white">1</span>{" "}
                        to{" "}
                        <span className="font-bold text-slate-900 dark:text-white">
                            5
                        </span>{" "}
                        of{" "}
                        <span className="font-bold text-slate-900 dark:text-white">
                            14
                        </span>{" "}
                        results
                    </p>
                    <div className="flex gap-2">
                        <button className="rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 disabled:opacity-50">
                            Previous
                        </button>
                        <button className="rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600">
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
