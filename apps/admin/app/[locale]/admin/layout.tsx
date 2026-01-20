import { Sidebar } from "@/app/components/Sidebar";
import { TopHeader } from "@/app/components/TopHeader";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden w-full bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display transition-colors duration-200">
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <TopHeader />
                <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
