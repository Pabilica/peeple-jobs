"use client";

import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

export function UserSidebar() {
    const pathname = usePathname();
    const t = useTranslations('Navbar'); // Reusing Navbar keys for consistency, or can create new Sidebar keys

    const navItems = [
        { key: "dashboard", icon: "dashboard", href: "/dashboard" },
        { key: "interviews", icon: "video_camera_front", href: "/interviews" },
        { key: "chat", icon: "chat", href: "/chat" },
        { key: "resume", icon: "description", href: "/resume" },
        // { key: "profile", icon: "person", href: "/profile" }, // Assuming profile exists or will exist
    ];

    return (
        <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-surface-dark border-r border-gray-100 dark:border-gray-800 flex-shrink-0 min-h-[calc(100vh-80px)]">
            <div className="flex flex-col h-full p-4">
                <div className="mb-6 px-4">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        My Workspace
                    </h2>
                </div>

                <nav className="flex-1 flex flex-col gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                        return (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive
                                        ? "bg-primary/10 text-primary font-bold"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                            >
                                <span className={`material-symbols-outlined ${isActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}>
                                    {item.icon}
                                </span>
                                <span className="text-sm">
                                    {t(item.key as any)}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
