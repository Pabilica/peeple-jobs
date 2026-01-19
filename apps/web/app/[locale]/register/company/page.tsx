import { RegisterForm } from "@/components/auth/register-form";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function RegisterCompanyPage() {
    return (
        <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
                    Peeple Jobs for Business
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;We hired 3 global talents within a week using Peeple Jobs. The matching quality is exceptional.&rdquo;
                        </p>
                        <footer className="text-sm">HR Manager, Global Tech Inc.</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Card className="border-0 shadow-none sm:border sm:shadow-sm">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl">기업회원 가입</CardTitle>
                            <CardDescription>
                                글로벌 인재 채용을 위한 첫 걸음.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RegisterForm userType="company" />
                        </CardContent>
                        <CardFooter className="flex flex-col gap-2">
                            <div className="text-sm text-muted-foreground">
                                이미 계정이 있으신가요?{" "}
                                <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                                    로그인
                                </Link>
                            </div>
                            <div className="text-xs text-muted-foreground text-center">
                                <Link href="/register" className="underline underline-offset-4">
                                    가입 유형 다시 선택하기
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
