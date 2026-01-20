"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { label: "Overview", icon: "dashboard", href: "/admin/analytics" },
    { label: "Users", icon: "person", href: "/admin/users" },
    { label: "Reports", icon: "report", href: "/admin/reports" },
    { label: "Seekers", icon: "group", href: "/admin/applicants" },
    { label: "Companies", icon: "business", href: "/admin/companies" },
    { label: "Jobs", icon: "work", href: "/admin/jobs" },
    { label: "Notices", icon: "campaign", href: "/admin/notices" },
    { label: "Payments", icon: "payments", href: "/admin/payments" },
    { label: "Plans", icon: "price_change", href: "/admin/plans" },
    {
        label: "Approvals",
        icon: "verified_user",
        href: "/admin/approvals",
        badge: "14",
    },
    { label: "Settings", icon: "settings", href: "/admin/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex w-72 flex-col bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex-shrink-0 z-20 transition-colors duration-200">
            <div className="flex flex-col h-full p-4">
                {/* Logo Area */}
                <div className="flex items-center gap-3 px-2 mb-8 mt-2">
                    <div className="bg-primary/10 rounded-xl p-2">
                        <span
                            className="material-symbols-outlined text-primary"
                            style={{ fontSize: "32px" }}
                        >
                            language_korean_latin
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight">
                            Peeple Jobs
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                            Admin Console
                        </p>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 flex flex-col gap-2">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group justify-between ${isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`material-symbols-outlined transition-colors ${isActive
                                            ? "text-primary"
                                            : "text-slate-400 group-hover:text-primary"
                                            }`}
                                    >
                                        {item.icon}
                                    </span>
                                    <span
                                        className={`text-sm ${isActive ? "font-bold" : "font-medium"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                                {item.badge && (
                                    <span className="bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile Snippet */}
                <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex items-center gap-3 px-2">
                    <div
                        className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrO8q5K748epXbkadyTHzWnUVgVtPebwf64h5TnTd3zcSfouoo_yHNWRMBPK1clxMSQ9PKGoPXcxwWB_1-H5IPwOI-5py7DE0mVLSmh-dO7q3Dp3CrvYUaoHqF70z2ZCcHtGmN_FX8nI70RaMOhtHjcNlnFX-HxKp5sX2PTXmbQcuwXiOxJvqgUqBI-gqQd5o-s8i6InnkutQJ6eAvM0l610u6y5ZzmGQlF0UxEdQwut9C0n1gIB8WW9mbe4hJDfyoXL2Fg1PsofY")',
                        }}
                    />
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                            Ji-min Kim
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            Super Admin
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
