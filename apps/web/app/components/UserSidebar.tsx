"use client";

import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

export function UserSidebar() {
    const pathname = usePathname();
    const t = useTranslations('Navbar');

    const navItems = [
        { key: "dashboard", icon: "dashboard", href: "/dashboard" },
        { key: "interviews", icon: "video_camera_front", href: "/interviews" },
        { key: "chat", icon: "chat", href: "/chat" },
        { key: "resume", icon: "description", href: "/resume" },
    ];

    return (
        <aside className="hidden lg:flex w-72 flex-col bg-surface-light dark:bg-[#1e1e1e] border-r border-slate-100 dark:border-slate-800 h-full transition-colors duration-200 z-20">
            <div className="p-6 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white shadow-glow">
                    <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                    <Link href="/" className="font-bold text-lg tracking-tight text-slate-900 dark:text-white leading-none hover:opacity-80 transition-opacity">
                        Peeple Jobs
                    </Link>
                    <p className="text-xs text-slate-400 font-medium mt-1">Job Seeker Portal</p>
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                    return (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group font-medium ${isActive
                                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md shadow-slate-200 dark:shadow-none"
                                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                                }`}
                        >
                            <span className={`material-symbols-outlined group-hover:scale-110 transition-transform ${isActive ? "" : "text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"}`}>
                                {item.icon}
                            </span>
                            <span>{t(item.key as any)}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-xl p-4 text-white relative overflow-hidden group cursor-pointer mb-6">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-1">Profile Completion</p>
                    <div className="flex items-end justify-between">
                        <span className="font-bold text-lg">85% Complete</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-1.5 mt-3 overflow-hidden">
                        <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>

                <div className="flex items-center gap-3 px-2">
                    <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold overflow-hidden">
                        <img src="https://i.pravatar.cc/150?u=alex" alt="Alex" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Alex Kim</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Software Engineer</p>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
