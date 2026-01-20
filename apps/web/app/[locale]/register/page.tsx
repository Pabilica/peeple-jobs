"use client";

import { Link } from '@/navigation';
import { FaUserAstronaut, FaBuilding } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function RegisterPage() {
    const t = useTranslations('Auth');

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        {t('joinTitle')}
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        {t('joinSubtitle')}
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
                        <h3 className="text-xl font-bold text-gray-900">{t('jobSeeker')}</h3>
                        <p className="mt-2 text-center text-gray-500">
                            {t('jobSeekerDesc')}
                        </p>
                        <div className="mt-6 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 group-hover:bg-blue-600 group-hover:text-white">
                            {t('createSeekerAccount')}
                        </div>
                    </Link>

                    {/* Company Card */}
                    <Link
                        href="/company/onboarding"
                        className="group relative flex flex-col items-center rounded-2xl border-2 border-transparent bg-white p-8 shadow-sm transition-all hover:border-purple-500 hover:shadow-lg"
                    >
                        <div className="mb-6 rounded-full bg-purple-100 p-6 transition-colors group-hover:bg-purple-200">
                            <FaBuilding className="h-12 w-12 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{t('company')}</h3>
                        <p className="mt-2 text-center text-gray-500">
                            {t('companyDesc')}
                        </p>
                        <div className="mt-6 rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 group-hover:bg-purple-600 group-hover:text-white">
                            {t('createCompanyAccount')}
                        </div>
                    </Link>
                </div>

                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        {t('alreadyHaveAccount')}{" "}
                        <Link
                            href="/login"
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            {t('signIn')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
