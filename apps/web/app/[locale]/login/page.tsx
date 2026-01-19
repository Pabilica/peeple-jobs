import { LoginForm } from "@/components/auth/login-form";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
    const t = useTranslations("Index"); // Should create Auth translations later

    return (
        <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-primary-900" />
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
                            &ldquo;This library has saved me countless hours of work and
                            helped me deliver stunning designs to my clients faster than
                            ever before.&rdquo;
                        </p>
                        <footer className="text-sm">Sofia Davis</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Card className="border-0 shadow-none sm:border sm:shadow-sm">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl">계정에 로그인</CardTitle>
                            <CardDescription>
                                이메일과 비밀번호를 입력해주세요.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LoginForm />
                        </CardContent>
                        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
                            <div className="text-sm text-muted-foreground">
                                <Link href="/register" className="underline underline-offset-4 hover:text-primary">
                                    계정이 없으신가요? 회원가입
                                </Link>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <Link href="/forgot-password" className="underline underline-offset-4 hover:text-primary">
                                    비밀번호 찾기
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
