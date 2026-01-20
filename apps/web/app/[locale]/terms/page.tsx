import React from "react";
import { Navbar } from "@/app/components/Navbar";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-surface-ground">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Terms of Service</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <p>Last updated: January 20, 2025</p>
                    <p>Welcome to Peeple Jobs. By using our website, you agree to these Terms of Service.</p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                    <h3>2. Prohibited Use</h3>
                    <p>You may not use the site for any unlawful purpose or to solicit others to perform or participate in any unlawful acts.</p>

                    <h3>3. Disclaimer</h3>
                    <p>The materials on Peeple Jobs website are provided on an 'as is' basis.</p>

                    {/* Add more mock content as needed */}
                </div>
            </main>
        </div>
    );
}
