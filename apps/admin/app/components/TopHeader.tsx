"use client";

export function TopHeader() {
    return (
        <header className="flex-shrink-0 h-20 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark flex items-center justify-between px-6 z-10 sticky top-0">
            <div className="flex items-center gap-4 flex-1">
                <button className="md:hidden p-2 text-slate-500 hover:text-primary">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                {/* Search Bar */}
                <div className="relative w-full max-w-md hidden sm:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400 text-[20px]">
                            search
                        </span>
                    </div>
                    <input
                        className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl leading-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm transition-shadow"
                        placeholder="Search companies, seekers, or jobs..."
                        type="text"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                {/* Language Switcher */}
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        EN
                    </span>
                    <span className="material-symbols-outlined text-slate-400 text-[18px]">
                        expand_more
                    </span>
                </button>
                {/* Notifications */}
                <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 size-2.5 bg-secondary rounded-full border-2 border-white dark:border-surface-dark"></span>
                </button>
            </div>
        </header>
    );
}
