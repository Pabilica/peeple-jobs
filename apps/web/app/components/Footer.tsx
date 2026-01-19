import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm">work</span>
                            </div>
                            <span className="text-lg font-bold text-text-main dark:text-white">Peeple Jobs</span>
                        </div>
                        <p className="text-sm text-text-muted dark:text-gray-500 mb-4">Connecting global talent with opportunities in South Korea.</p>
                        <div className="flex gap-4">
                            <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><i className="fa-brands fa-twitter"></i></Link> {/* Placeholder for icon */}
                            <span className="text-gray-400">Instagram</span>
                            <span className="text-gray-400">LinkedIn</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white mb-4">For Job Seekers</h4>
                        <ul className="space-y-2 text-sm text-text-muted dark:text-gray-400">
                            <li><Link className="hover:text-primary" href="#">Find Jobs</Link></li>
                            <li><Link className="hover:text-primary" href="#">Visa Guide</Link></li>
                            <li><Link className="hover:text-primary" href="#">Living in Korea</Link></li>
                            <li><Link className="hover:text-primary" href="#">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white mb-4">For Employers</h4>
                        <ul className="space-y-2 text-sm text-text-muted dark:text-gray-400">
                            <li><Link className="hover:text-primary" href="#">Post a Job</Link></li>
                            <li><Link className="hover:text-primary" href="#">Talent Search</Link></li>
                            <li><Link className="hover:text-primary" href="#">Visa Sponsorship Info</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white mb-4">Language</h4>
                        <div className="flex flex-col gap-2">
                            <button className="text-left text-sm text-primary font-medium flex items-center gap-2">
                                <span className="material-symbols-outlined text-base">check</span> English
                            </button>
                            <button className="text-left text-sm text-text-muted hover:text-primary transition-colors">Korean (한국어)</button>
                            <button className="text-left text-sm text-text-muted hover:text-primary transition-colors">Vietnamese (Tiếng Việt)</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2024 Peeple Jobs Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">Privacy Policy</Link>
                        <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
