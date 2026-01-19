import { useTranslations } from "next-intl";
import Link from "next/link";
import { Building2, User } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    const t = useTranslations("Index"); // TODO: Add auth translations

    return (
        <div className="container relative flex h-screen min-h-[600px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-secondary-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Peeple Jobs
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;Join thousands of companies and job seekers connecting everyday through Peeple Jobs.&rdquo;
                        </p>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            회원가입
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            가입 유형을 선택해주세요.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Job Seeker Option */}
                        <Link href="/register/seeker" className="group">
                            <Card className="h-full border-2 transition-all hover:border-primary-500 hover:bg-primary-50 cursor-pointer">
                                <CardHeader>
                                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                        <User className="h-6 w-6" />
                                    </div>
                                    <CardTitle>개인회원</CardTitle>
                                    <CardDescription>
                                        일자리를 찾고 있는 구직자
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                                        <li>이력서 등록 및 관리</li>
                                        <li>맞춤형 채용 공고 추천</li>
                                        <li>간편 입사 지원</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* Company Option */}
                        <Link href="/register/company" className="group">
                            <Card className="h-full border-2 transition-all hover:border-secondary-500 hover:bg-secondary-50 cursor-pointer">
                                <CardHeader>
                                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white transition-colors">
                                        <Building2 className="h-6 w-6" />
                                    </div>
                                    <CardTitle>기업회원</CardTitle>
                                    <CardDescription>
                                        인재를 찾고 있는 기업
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                                        <li>채용 공고 등록</li>
                                        <li>인재 검색 및 제안</li>
                                        <li>지원자 관리</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="flex flex-col space-y-2 text-center text-sm">
                        <div className="text-muted-foreground">
                            이미 계정이 있으신가요?{" "}
                            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                                로그인
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
