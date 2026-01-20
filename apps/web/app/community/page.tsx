'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';

// Mock Posts
const MOCK_POSTS = [
    {
        id: 'post-1',
        category: 'Visa Q&A',
        title: 'Documents needed for E-7 visa change?',
        author: 'Sarah Jenkins',
        date: '2 hours ago',
        views: 124,
        comments: 8,
        likes: 15,
        snippet: 'I am currently on a D-10 visa and received a job offer. What documents do I need to prepare for the E-7 visa change application?',
    },
    {
        id: 'post-2',
        category: 'General',
        title: 'Best neighborhoods for expats in Seoul?',
        author: 'Mike Chen',
        date: '5 hours ago',
        views: 256,
        comments: 24,
        likes: 42,
        snippet: 'Moving to Seoul next month for work. Looking for recommendations on foreigner-friendly neighborhoods with good transport links.',
    },
    {
        id: 'post-3',
        category: 'Career',
        title: 'Salary negotiation tips in Korea',
        author: 'Jessica Lee',
        date: '1 day ago',
        views: 512,
        comments: 12,
        likes: 89,
        snippet: 'Just got an offer from a mid-sized tech company. How common is salary negotiation in Korean work culture?',
    }
];

export default function CommunityPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <Navbar />

            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex gap-8">

                {/* Sidebar Categories */}
                <aside className="hidden lg:flex flex-col w-64 gap-6 shrink-0">
                    <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">edit</span>
                        New Post
                    </button>

                    <div className="flex flex-col gap-1">
                        <h3 className="px-3 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Categories</h3>
                        {['All', 'General', 'Visa Q&A', 'Career', 'Life in Korea'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${activeCategory === cat ? 'bg-slate-100 dark:bg-slate-800 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex items-center justify-between lg:hidden">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Community</h1>
                        <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm">New Post</button>
                    </div>

                    {/* Filters (Mobile) */}
                    <div className="lg:hidden flex overflow-x-auto gap-2 pb-2">
                        {['All', 'General', 'Visa Q&A', 'Career', 'Life in Korea'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Post List */}
                    <div className="flex flex-col gap-4">
                        {MOCK_POSTS.map((post) => (
                            <div key={post.id} className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-slate-400">• Posted by {post.author}</span>
                                    <span className="text-xs text-slate-400">• {post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {post.snippet}
                                </p>
                                <div className="flex items-center gap-6 text-slate-400 text-sm font-medium border-t border-slate-50 dark:border-slate-800 pt-4">
                                    <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                                        {post.views}
                                    </span>
                                    <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                                        {post.comments} Comments
                                    </span>
                                    <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                                        {post.likes} Likes
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar (Trending) */}
                <aside className="hidden xl:flex flex-col w-72 gap-6 shrink-0">
                    <div className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">trending_up</span>
                            Trending Topics
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <li className="flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg -mx-2 transition-colors cursor-pointer">
                                <span className="font-bold text-slate-300 text-lg">1</span>
                                <div>
                                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-2">E-7-4 Visa point system update 2024</p>
                                    <span className="text-xs text-slate-400">1.2k views</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg -mx-2 transition-colors cursor-pointer">
                                <span className="font-bold text-slate-300 text-lg">2</span>
                                <div>
                                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-2">Best Korean language schools for workers</p>
                                    <span className="text-xs text-slate-400">856 views</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg -mx-2 transition-colors cursor-pointer">
                                <span className="font-bold text-slate-300 text-lg">3</span>
                                <div>
                                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-2">Tax filing season guide for foreigners</p>
                                    <span className="text-xs text-slate-400">642 views</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>

            </main>
        </div>
    );
}
