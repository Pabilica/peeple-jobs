"use client";

export default function ApplicantsPage() {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* Breadcrumbs & Heading */}
            <div className="px-6 pt-6 pb-2 shrink-0">
                <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-4">
                    <a className="hover:text-primary transition-colors" href="#">
                        Jobs
                    </a>
                    <span className="material-symbols-outlined text-[14px]">
                        chevron_right
                    </span>
                    <a className="hover:text-primary transition-colors" href="#">
                        Senior UX Designer
                    </a>
                    <span className="material-symbols-outlined text-[14px]">
                        chevron_right
                    </span>
                    <span className="text-gray-900 dark:text-white font-bold">
                        Applicants
                    </span>
                </nav>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                Senior UX Designer
                            </h2>
                            <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold border border-green-200 dark:border-green-800">
                                Active
                            </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                            <span>ID: 2023-KR-092</span>
                            <span className="size-1 rounded-full bg-gray-300"></span>
                            <span>Seoul, Gangnam-gu</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="h-10 px-4 rounded-xl border border-border-light dark:border-border-dark text-gray-700 dark:text-gray-200 text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2 bg-surface-light dark:bg-surface-dark">
                            <span className="material-symbols-outlined text-[20px]">
                                download
                            </span>
                            <span>Export CSV</span>
                        </button>
                        <button className="h-10 px-5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">
                                person_add
                            </span>
                            <span>Invite Candidate</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters & Toolbar */}
            <div className="px-6 py-4 shrink-0 grid grid-cols-1 xl:grid-cols-12 gap-4">
                {/* Search */}
                <div className="xl:col-span-4 relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                        search
                    </span>
                    <input
                        className="w-full h-11 pl-10 pr-4 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm placeholder-gray-400"
                        placeholder="Search applicants by name, visa, or keyword..."
                        type="text"
                    />
                </div>
                {/* Filter Chips */}
                <div className="xl:col-span-8 flex flex-wrap items-center gap-2">
                    <div className="h-11 px-3 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl flex items-center gap-2 shadow-sm text-sm text-gray-600 dark:text-gray-300 cursor-pointer hover:border-primary/50 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">
                            filter_list
                        </span>
                        <span className="font-semibold">Filter:</span>
                    </div>
                    <button className="h-11 px-4 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl flex items-center gap-2 shadow-sm text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary font-medium">
                            Visa Type
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-gray-400">
                            keyboard_arrow_down
                        </span>
                    </button>
                    <button className="h-11 px-4 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl flex items-center gap-2 shadow-sm text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary font-medium">
                            Nationality
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-gray-400">
                            keyboard_arrow_down
                        </span>
                    </button>
                    <div className="ml-auto flex bg-gray-100 dark:bg-white/5 p-1 rounded-lg border border-border-light dark:border-border-dark">
                        <button className="p-1.5 rounded bg-white dark:bg-surface-dark shadow-sm text-primary dark:text-primary">
                            <span className="material-symbols-outlined text-[20px] block">
                                view_kanban
                            </span>
                        </button>
                        <button className="p-1.5 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                            <span className="material-symbols-outlined text-[20px] block">
                                table_rows
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Kanban Board Area */}
            <div className="flex-1 overflow-x-auto overflow-y-hidden kanban-container px-6 pb-6">
                <div className="flex h-full gap-5 min-w-max">
                    {/* Column 1: Applied */}
                    <div className="flex flex-col w-[320px] h-full rounded-2xl bg-gray-100/50 dark:bg-[#1A1A1A] border border-transparent dark:border-white/5">
                        {/* Header */}
                        <div className="p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="size-2.5 rounded-full bg-blue-500"></div>
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    Applied
                                </h3>
                                <span className="bg-white dark:bg-white/10 px-2 py-0.5 rounded-md text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                                    12
                                </span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <span className="material-symbols-outlined text-[20px]">
                                    more_horiz
                                </span>
                            </button>
                        </div>
                        {/* Cards Container */}
                        <div className="flex-1 overflow-y-auto kanban-column p-3 flex flex-col gap-3">
                            {/* Card 1 */}
                            <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/30 cursor-grab active:cursor-grabbing relative">
                                <div
                                    className="absolute top-3 right-3 size-2 bg-accent-terracotta rounded-full ring-2 ring-white dark:ring-surface-dark"
                                    title="New Applicant"
                                ></div>
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="size-10 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBY00mApENx7xof3wLjI0v0ZvlcyAxNOcKq5Z4jKdYRPk97luUStuSX5E7Y3sYyQnzkb2U3CdT9QfP5rQkppyqGbLPBdub3Bl--TAV9iHKCGhfWtQn30dXHEjfi981zR78Y58Yrn3mRatqW0H7_sO2UBGS00ui3d-JXB4x4bHy8KwsT2TqyL4vSu5RN3E3S0T1EOlw02tbrylzVMLIiaY3La6QS0piRZeDab_mVSg-oyccJxlZB7V_l-zIhem4Sw6wdq6EB3jVMvEQ')",
                                        }}
                                    ></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                            Sarah Lee
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            Product Designer
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-bold border border-purple-100 dark:border-purple-800/50">
                                        F-4 Visa
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-white/5 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-700">
                                        🇺🇸 USA
                                    </span>
                                </div>
                                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                    <span className="text-[11px] font-medium text-gray-400">
                                        Applied 2h ago
                                    </span>
                                    <button className="text-primary hover:text-primary-hover text-xs font-bold flex items-center gap-1 group/btn">
                                        Resume
                                        <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-0.5 transition-transform">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/30 cursor-grab active:cursor-grabbing">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="size-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        JD
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                            John Doe
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            UI Specialist
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-xs font-bold border border-orange-100 dark:border-orange-800/50">
                                        E-7 Visa
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-white/5 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-700">
                                        🇨🇦 CA
                                    </span>
                                </div>
                                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                    <span className="text-[11px] font-medium text-gray-400">
                                        Applied 5h ago
                                    </span>
                                    <button className="text-primary hover:text-primary-hover text-xs font-bold flex items-center gap-1 group/btn">
                                        Resume
                                        <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-0.5 transition-transform">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/30 cursor-grab active:cursor-grabbing">
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="size-10 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2BOethSnGC2x1OntK4tdK1nLlhzM1X1V07gor5_N-bOEr387CyCUu3dC2XZQcWYfSyaG2dPT1N7LgLD2-xGqW7CUNN_VapPaEornyQ_AyIHBNQWbuLcyOEQAMFax92QZbZLdTqqZn1SX3AqDvd0537uYHmuj-s47tA-WfZU0IU0EAw9GKywDoBzNDVLCq8DRzkgKIsjJDbsGB554H_mI7LtsJrxg2SgUdlpV6gwOW5ZgGy7EM_AbvBAAL4VIxAeGhPOCqW9oaOYo')",
                                        }}
                                    ></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                            Michael Chen
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            Senior UX Designer
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 text-xs font-bold border border-red-100 dark:border-red-800/50">
                                        Visa Expiring
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-white/5 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-700">
                                        🇬🇧 UK
                                    </span>
                                </div>
                                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                    <span className="text-[11px] font-medium text-gray-400">
                                        Applied 1d ago
                                    </span>
                                    <button className="text-primary hover:text-primary-hover text-xs font-bold flex items-center gap-1 group/btn">
                                        Resume
                                        <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-0.5 transition-transform">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Screening */}
                    <div className="flex flex-col w-[320px] h-full rounded-2xl bg-gray-100/50 dark:bg-[#1A1A1A] border border-transparent dark:border-white/5">
                        <div className="p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="size-2.5 rounded-full bg-purple-500"></div>
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    Screening
                                </h3>
                                <span className="bg-white dark:bg-white/10 px-2 py-0.5 rounded-md text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                                    4
                                </span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <span className="material-symbols-outlined text-[20px]">
                                    more_horiz
                                </span>
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto kanban-column p-3 flex flex-col gap-3">
                            <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/30 cursor-grab active:cursor-grabbing">
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="size-10 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYoBKo_pO4V81FPDqPMWrmX3nyycYzc6bUYB5IgTO8onH9gb8eyuYCWIQX74lw6f67eBD38vaXfAakFVGl7bV_ddnyNnJJnTa74Jxi242Rm3sFOEc6Ks31cPdpGA_b8UScPfw3vaKwzGgWjsYx-sur2iPcgjKFxRh6250MtlhnkodTI1cnEZ2aSqbtSdVAPZaA12M44WEcKU5qa-eA22mqurbD_4FPVUM9jb6a2G56gawaKfj-qkDHHGjgPKjXeJFuZ6Xquj_5EIM')",
                                        }}
                                    ></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                            Elena Rodriguez
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            UX Researcher
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold border border-blue-100 dark:border-blue-800/50">
                                        D-10 Job Seeker
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-white/5 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-700">
                                        🇪🇸 ES
                                    </span>
                                </div>
                                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                    <span className="text-[11px] font-medium text-gray-400">
                                        Screening 1d
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="size-7 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 text-gray-500 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">
                                                chat_bubble
                                            </span>
                                        </button>
                                        <button className="size-7 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">
                                                check
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/30 cursor-grab active:cursor-grabbing">
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="size-10 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtBfVqT_1a2FvyrYTRksxT_kEFrxG4iN-nT4XXxEg_20T9DE2uOajp5ds8bDSlfKqlCc_mc99NaISFPUgD6Mhd1bq7jaMNuwvX1NAghDik8xzzF4tcCiF2cpVXpBbRgQk3f4WL6y59av8iejMelnJW8WE7zkgNfj2TAueNh829lydOf76sKOi-jy-7CeMqwBWwZOhRej9ctjPOZupGdHoahE2bm3tqlgeev88ukNRvVQOafjx882sv07ohYhH9AZHpElPy3yAKVdI')",
                                        }}
                                    ></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                            David Kim
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            Interaction Designer
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-bold border border-purple-100 dark:border-purple-800/50">
                                        F-4 Visa
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-white/5 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-700">
                                        🇺🇸 USA
                                    </span>
                                </div>
                                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                    <span className="text-[11px] font-medium text-gray-400">
                                        Screening 2d
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="size-7 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 text-gray-500 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">
                                                chat_bubble
                                            </span>
                                        </button>
                                        <button className="size-7 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">
                                                check
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Interview */}
                    <div className="flex flex-col w-[320px] h-full rounded-2xl bg-gray-100/50 dark:bg-[#1A1A1A] border border-transparent dark:border-white/5">
                        <div className="p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="size-2.5 rounded-full bg-amber-500"></div>
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    Interview
                                </h3>
                                <span className="bg-white dark:bg-white/10 px-2 py-0.5 rounded-md text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                                    2
                                </span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <span className="material-symbols-outlined text-[20px]">
                                    more_horiz
                                </span>
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto kanban-column p-3 flex flex-col gap-3">
                            <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-amber-400 cursor-grab active:cursor-grabbing">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-start gap-3">
                                        <div
                                            className="size-10 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfPjsZm4DreYEwZ6XiHQfzgyDF8w-FFkDZ9H5FdGa9HYYFI952E-ueqQcfK0x6gdgn171YBTFkwvqxAlhJC7FXySL3LWBwIwLWVYAqTK0O9WGjMfKZa22SkOBYkg_Eq2vFdhSOgBxYrczqRprfSE1tL3FsqrxZ3f9kfmKZYCt7LkBTauak9nFSlSyUjVsGtSI6CE44JxL9l-uPTeXJvrz0SbQS4e3uL-U1JVlqIxhB8emJ9aDVY1e8gWjb9l69JFxpUDA25qVBrf4')",
                                            }}
                                        ></div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                                Mark Wilson
                                            </h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                Product Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg mb-3 flex items-start gap-2">
                                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[18px] mt-0.5">
                                        calendar_clock
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold text-amber-800 dark:text-amber-200">
                                            Interview Tomorrow
                                        </p>
                                        <p className="text-[11px] text-amber-600 dark:text-amber-400">
                                            14:00 PM • Google Meet
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-xs font-bold border border-orange-100 dark:border-orange-800/50">
                                        E-7 Visa
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-white/5 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-700">
                                        🇦🇺 AU
                                    </span>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/30 cursor-grab active:cursor-grabbing">
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="size-10 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuoQL4VxYWI3RonwPAL22Km1CxCUKGxFY9Abo3LAnakFXwkiqAwCbF5jlfq_s5yuYKhO5NJxcpf0Xm5SOCd2vlOqJbQZx4obv2JD4cQStyE20ad2rYEAKucP0ZKAR12zso9HGOrcmtt3PI1JcIYu2ZjZeHUSJWZnG6dWh4ZF1MA-Wx1QbGlPiV8_mM70-57qGWY4ODU0X3_CnUMoadeSqKDgbMVS9B_r1W64yja4SalIqK4tGy1T7QFVwDvf-WgcKfqMglxW6RS1o')",
                                        }}
                                    ></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                            Emily Chen
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            Visual Designer
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-bold border border-purple-100 dark:border-purple-800/50">
                                        F-4 Visa
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-white/5 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-700">
                                        🇨🇦 CA
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Offered */}
                    <div className="flex flex-col w-[320px] h-full rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20">
                        <div className="p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="size-2.5 rounded-full bg-primary"></div>
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    Offered
                                </h3>
                                <span className="bg-white dark:bg-white/10 px-2 py-0.5 rounded-md text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                                    1
                                </span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <span className="material-symbols-outlined text-[20px]">
                                    more_horiz
                                </span>
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto kanban-column p-3 flex flex-col gap-3">
                            <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-primary/20 ring-1 ring-primary/5 cursor-grab active:cursor-grabbing">
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="size-10 rounded-full bg-cover bg-center shrink-0 border-2 border-primary/20"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDXZSga7l5r0JlkPNT4Fy0NKEPJSvcl3k3kXSok-lv-oEZ4Eb_OyU0074cAnPIO-pNRPT6PvbhmfQvV_xKHue8bDAGVX8nrgpbwAo3A3_EuFJdr8and5zhA-SZSZHI6kmCe0cWZPmN7zOZSn8JsRVoCRZDw4DjQuhkAJnW-h-5czp22-kINjEfudSLPQQwZMW8hCjlhVVE60MwdwB6OVTcH9sA7wmvBncpIGEM3XVSVahi6rxy5Y3NGe5hSqv96je23ofS1YyzA2E')",
                                        }}
                                    ></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                            Alex Thompson
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            Senior Product Designer
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-4 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg border border-green-100 dark:border-green-800/50">
                                    <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[16px]">
                                        verified
                                    </span>
                                    <span className="text-xs font-semibold text-green-700 dark:text-green-300">
                                        Offer Sent
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-bold border border-purple-100 dark:border-purple-800/50">
                                        F-4 Visa
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-white/5 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-700">
                                        🇺🇸 USA
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 5: Rejected */}
                    <div className="flex flex-col w-[320px] h-full rounded-2xl bg-gray-50 dark:bg-[#1A1A1A]/50 border border-transparent dark:border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="size-2.5 rounded-full bg-gray-400"></div>
                                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Rejected
                                </h3>
                                <span className="bg-gray-200 dark:bg-white/5 px-2 py-0.5 rounded-md text-xs font-bold text-gray-500 dark:text-gray-400 shadow-sm">
                                    0
                                </span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <span className="material-symbols-outlined text-[20px]">
                                    more_horiz
                                </span>
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto kanban-column p-3 flex flex-col items-center justify-center gap-3 text-center">
                            {/* Empty State */}
                            <div className="size-24 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-[40px]">
                                    inbox
                                </span>
                            </div>
                            <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
                                No rejected candidates yet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
