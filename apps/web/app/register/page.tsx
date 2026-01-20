"use client";

import Link from "next/link";
import { FaUserAstronaut, FaBuilding } from "react-icons/fa";

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Join Peeple Jobs
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Choose your account type to get started
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {/* Job Seeker Card */}
                    <Link
                        href="/onboarding"
                        className="group relative flex flex-col items-center rounded-2xl border-2 border-transparent bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-lg"
                    >
                        <div className="mb-6 rounded-full bg-blue-100 p-6 transition-colors group-hover:bg-blue-200">
                            <FaUserAstronaut className="h-12 w-12 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">I&apos;m a Job Seeker</h3>
                        <p className="mt-2 text-center text-gray-500">
                            Find jobs, manage your resume, and connect with great companies.
                        </p>
                        <div className="mt-6 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 group-hover:bg-blue-600 group-hover:text-white">
                            Create Seeker Account
                        </div>
                    </Link>

                    {/* Company Card */}
                    <Link
                        href="/company/register" // This page might not exist yet, but logically correct.
                        className="group relative flex flex-col items-center rounded-2xl border-2 border-transparent bg-white p-8 shadow-sm transition-all hover:border-purple-500 hover:shadow-lg"
                    >
                        <div className="mb-6 rounded-full bg-purple-100 p-6 transition-colors group-hover:bg-purple-200">
                            <FaBuilding className="h-12 w-12 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">I&apos;m a Company</h3>
                        <p className="mt-2 text-center text-gray-500">
                            Post jobs, find talent, and manage your recruitment process.
                        </p>
                        <div className="mt-6 rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 group-hover:bg-purple-600 group-hover:text-white">
                            Create Company Account
                        </div>
                    </Link>
                </div>

                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
