"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function LoginPage() {
    const [phone, setPhone] = useState("");

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
                {/* Header */}
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Peeple Jobs
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to start your journey
                    </p>
                </div>

                {/* Social Login */}
                <div className="space-y-3">
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <FcGoogle className="h-5 w-5" />
                        Continue with Google
                    </button>
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-3 rounded-lg border border-transparent bg-[#FEE500] px-4 py-3 text-sm font-medium text-black hover:bg-[#FDD835] focus:outline-none focus:ring-2 focus:ring-[#FEE500] focus:ring-offset-2"
                    >
                        <RiKakaoTalkFill className="h-5 w-5" />
                        Continue with Kakao
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">
                            Or continue with phone
                        </span>
                    </div>
                </div>

                {/* Phone Login */}
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone Number
                        </label>
                        <div className="mt-1">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                placeholder="+82 10-1234-5678"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Sign in with Phone
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
