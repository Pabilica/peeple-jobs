import Link from 'next/link';
import React from 'react';

export const IndustrySection = () => {
    return (
        <section className="py-16 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-bold text-text-main dark:text-white">Browse by Industry</h2>
                    <Link className="text-primary font-semibold hover:text-primary-hover flex items-center gap-1" href="#">
                        View all <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {/* Card 1: IT / Tech */}
                    <Link className="col-span-1 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-soft-hover transition-all duration-300 border border-gray-100 dark:border-gray-700" href="#">
                        <div className="absolute top-6 left-6 z-10">
                            <div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-primary mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">terminal</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-1">IT & Tech</h3>
                            <p className="text-sm text-text-muted dark:text-gray-400">1,240+ Jobs</p>
                        </div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        {/* Using img tag directly as per HTML but could use Next.js Image component. Keeping img for simplicity with exact styles for now. */}
                        <img
                            className="absolute right-0 bottom-0 w-3/4 h-3/4 object-contain object-bottom opacity-30 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0"
                            alt="Modern tech office with computers"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCXDX5f16iOR0GI9T-LDSo_CzNXUJlyf7kGoz0PbWUGUwUoGM7Nbuf40prwOgfu00GI8-zfm-FaW_FV32H7yH_mvrKifuxolmuQSj5Bf4QsHrFDkzoGCva1cOhXt35lVdWKoYsp-Mtg4ASvhHrj6p4H2qJpeoHg98WdIhksk1P_kc5YzqPS059ZqqvM4yJ4bjcq8-AlsNZEkLV40WB0lUpEtqu8Hd5Wr8NPP7CGP6CnGtsHuHM_FT0ZH7kGb-A0SUnoDooxvZiEbc"
                        />
                    </Link>
                    {/* Card 2: Manufacturing */}
                    <Link className="col-span-1 lg:col-span-2 h-48 group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-soft-hover transition-all duration-300 border border-gray-100 dark:border-gray-700" href="#">
                        <div className="absolute top-6 left-6 z-10">
                            <div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-primary mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">precision_manufacturing</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Manufacturing</h3>
                            <p className="text-sm text-text-muted dark:text-gray-400">3,500+ Jobs</p>
                        </div>
                        <img
                            className="absolute -right-4 -bottom-4 w-32 h-32 object-cover rounded-full opacity-20 group-hover:opacity-40 transition-opacity rotate-12"
                            alt="Industrial manufacturing machinery"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnsdapD5nwk8JPofcXKGGYtVAz2-nklr3ADj8QxSZQjc8liPyg0HJwjzKtY1wA7AGGPmBJCFWpctj5imCGDzzrPgUHMhexVgv2SWJiz-UI4eobos6PR4MbS9t_A8pN5RBy1tQElWMNbww0INieisvON3mBvs9btY43pPukg71PHy6MamZbyhe7-wXE-yZU2bklI_lYCbhEcy8lQGP09zRAfnuiBGaozy4GI0YfTTM0TO2T0E83azbKCVcwKNpLhM2RlTksqzlp80E"
                        />
                    </Link>
                    {/* Card 3: Education */}
                    <Link className="col-span-1 h-48 group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-soft-hover transition-all duration-300 border border-gray-100 dark:border-gray-700" href="#">
                        <div className="absolute top-6 left-6 z-10">
                            <div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-primary mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Education</h3>
                            <p className="text-sm text-text-muted dark:text-gray-400">850+ Jobs</p>
                        </div>
                    </Link>
                    {/* Card 4: Hospitality */}
                    <Link className="col-span-1 h-48 group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-soft-hover transition-all duration-300 border border-gray-100 dark:border-gray-700" href="#">
                        <div className="absolute top-6 left-6 z-10">
                            <div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-primary mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">restaurant</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Hospitality</h3>
                            <p className="text-sm text-text-muted dark:text-gray-400">500+ Jobs</p>
                        </div>
                    </Link>
                    {/* Card 5: Construction */}
                    <Link className="col-span-1 lg:col-span-2 h-48 group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-soft-hover transition-all duration-300 border border-gray-100 dark:border-gray-700" href="#">
                        <div className="absolute top-6 left-6 z-10">
                            <div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-primary mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">engineering</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Construction</h3>
                            <p className="text-sm text-text-muted dark:text-gray-400">2,100+ Jobs</p>
                        </div>
                        <img
                            className="absolute -right-4 -bottom-4 w-32 h-32 object-cover rounded-full opacity-20 group-hover:opacity-40 transition-opacity -rotate-12"
                            alt="Construction site helmet and blueprints"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgqIXeTTGMZDnimD4DLnuDTmDNF8nfny2h1hsjPMMrWD1nOdtUvyCb173rTdHTzuBUHgxSQwYh_4k-0lh2LDk9s-IMloxB-v50C-oeh-AaV3fnR2nQNuuBBcsi1L99FMkG04DW0IlPEBpMVmBV5SvYM2TuHM9G7z0wFumoByHI4LG2PGyHJ6Gl0IvZ5rAKo1O3elIg8YlrdLPs-MSboj2VAHnHcFuh7huAW9yfj87vTo4D0B03Or0B59E__PgaF4I-AnS5rW0OuLo"
                        />
                    </Link>
                    {/* Card 6: Delivery & Logistics */}
                    <Link className="col-span-1 lg:col-span-2 h-48 group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-soft-hover transition-all duration-300 border border-gray-100 dark:border-gray-700" href="#">
                        <div className="absolute top-6 left-6 z-10">
                            <div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-primary mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Logistics</h3>
                            <p className="text-sm text-text-muted dark:text-gray-400">920+ Jobs</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
