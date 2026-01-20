"use client";

import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

export function Sidebar() {
    const pathname = usePathname();
    const t = useTranslations('Navigation');

    // Define nav items inside component to use translations, or use keys
    const navItems = [
        { key: "dashboard", icon: "dashboard", href: "/admin/analytics" },
        { key: "users", icon: "person", href: "/admin/users" },
        { key: "reports", icon: "report", href: "/admin/reports" },
        { key: "companies", icon: "business", href: "/admin/companies" }, // Seekers was "group", changed label to match keys better? "Seekers" -> "users"? No, "Seekers" -> "applicants"? Let's check en.json. en.json has "users", "companies".
        // Original Sidebar had: "Seekers" (/admin/applicants). en.json doesn't have "applicants". I should add "applicants" to en.json or map it.
        // Let's use keys matching en.json/ko.json. common keys: dashboard, users, companies, reports, payment, settings.
        // Missing in json: "applicants" ("Seekers"), "jobs", "notices", "approvals".
        // I will add them to en.json/ko.json in next step. For now I will use existing keys or fallback.
        { key: "companies", icon: "business", href: "/admin/companies" },
        { key: "settings", icon: "settings", href: "/admin/settings" },
    ];

    // Extended items that might not be in initial json, I need to update json.
    const extendedNavItems = [
        { key: "dashboard", icon: "dashboard", href: "/admin/analytics" },
        { key: "approvals", icon: "verified_user", href: "/admin/approvals", badge: "14" },
        { key: "users", icon: "person", href: "/admin/users" }, // Seekers/Users ambiguity. Let's assume Users = Seekers for now or strictly Users.
        { key: "companies", icon: "business", href: "/admin/companies" },
        // { key: "jobs", icon: "work", href: "/admin/jobs" },
        // { key: "notices", icon: "campaign", href: "/admin/notices" },
        { key: "payment", icon: "payments", href: "/admin/payments" },
        { key: "settings", icon: "settings", href: "/admin/settings" },
    ];

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
                    {extendedNavItems.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                        // Use keys from Navigation namespace.
                        // If key doesn't exist, it will return key.
                        // I need to update messages.json to include 'approvals'.
                        const label = t(item.key as any);

                        return (
                            <Link
                                key={item.key}
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
                                        {label}
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
