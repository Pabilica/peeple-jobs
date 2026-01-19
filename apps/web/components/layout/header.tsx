"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">P</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Peeple Jobs
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/jobs"
                            className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                        >
                            채용 공고
                        </Link>
                        <Link
                            href="/companies"
                            className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                        >
                            기업 정보
                        </Link>
                        <Link
                            href="/resumes/new"
                            className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                        >
                            이력서 작성
                        </Link>
                        <Link
                            href="/visa"
                            className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                        >
                            비자 정보
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                        >
                            로그인
                        </Link>
                        <Link
                            href="/register"
                            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                        >
                            회원가입
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/jobs"
                                className="text-gray-600 hover:text-indigo-600 font-medium"
                            >
                                채용 공고
                            </Link>
                            <Link
                                href="/companies"
                                className="text-gray-600 hover:text-indigo-600 font-medium"
                            >
                                기업 정보
                            </Link>
                            <Link
                                href="/resumes/new"
                                className="text-gray-600 hover:text-indigo-600 font-medium"
                            >
                                이력서 작성
                            </Link>
                            <Link
                                href="/visa"
                                className="text-gray-600 hover:text-indigo-600 font-medium"
                            >
                                비자 정보
                            </Link>
                            <div className="flex gap-3 pt-4 border-t border-gray-100">
                                <Link
                                    href="/login"
                                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg font-medium"
                                >
                                    로그인
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium"
                                >
                                    회원가입
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
