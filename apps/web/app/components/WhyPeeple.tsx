import React from 'react';

export const WhyPeeple = () => {
    return (
        <section className="py-20 bg-primary/5 dark:bg-primary/10 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">Why use Peeple Jobs?</h2>
                    <p className="text-text-muted dark:text-gray-300">We understand the challenges of finding work in a foreign country. Our platform is built to make your transition smooth and secure.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div className="flex flex-col items-center text-center p-6">
                        <div className="size-16 rounded-2xl bg-white dark:bg-surface-dark shadow-soft flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">verified</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Verified Employers</h3>
                        <p className="text-text-muted dark:text-gray-400">Every company is vetted to ensure they are legally eligible to hire international talent and provide visa support.</p>
                    </div>
                    {/* Benefit 2 */}
                    <div className="flex flex-col items-center text-center p-6">
                        <div className="size-16 rounded-2xl bg-white dark:bg-surface-dark shadow-soft flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">g_translate</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Multilingual Support</h3>
                        <p className="text-text-muted dark:text-gray-400">Our platform and job listings support auto-translation, so language barriers never stop you from applying.</p>
                    </div>
                    {/* Benefit 3 */}
                    <div className="flex flex-col items-center text-center p-6">
                        <div className="size-16 rounded-2xl bg-white dark:bg-surface-dark shadow-soft flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">diversity_3</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Community First</h3>
                        <p className="text-text-muted dark:text-gray-400">Join a network of over 50,000 expats. Share tips, ask visa questions, and get advice from people who've been there.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
