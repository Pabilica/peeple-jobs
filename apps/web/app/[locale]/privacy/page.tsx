import React from "react";
import { Navbar } from "@/app/components/Navbar";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-surface-ground">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Privacy Policy</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <p>Last updated: January 20, 2025</p>
                    <p>At Peeple Jobs, we respect your privacy and are committed to protecting it.</p>

                    <h3>1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you create an account, update your profile, or post a job.</p>

                    <h3>2. How We Use Information</h3>
                    <p>We use the information we collect to provide, maintain, and improve our services.</p>

                    <h3>3. Information Sharing</h3>
                    <p>We do not share your personal information with third parties except as described in this policy.</p>

                    {/* Add more mock content as needed */}
                </div>
            </main>
        </div>
    );
}
