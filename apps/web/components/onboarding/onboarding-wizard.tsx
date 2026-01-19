"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const profileSchema = z.object({
    fullName: z.string().min(2, { message: "이름을 입력해주세요." }),
    phoneNumber: z.string().min(10, { message: "유효한 전화번호를 입력해주세요." }),
    nationality: z.string().min(1, { message: "국적을 선택해주세요." }),
    visaType: z.string().min(1, { message: "비자 타입을 선택해주세요." }),
})

type ProfileData = z.infer<typeof profileSchema>

// Steps
const STEPS = [
    { id: 1, title: "기본 정보", description: "본인 확인을 위한 정보를 입력해주세요." },
    { id: 2, title: "비자 & 국적", description: "취업 자격 확인을 위한 정보입니다." },
    { id: 3, title: "완료", description: "가입이 완료되었습니다!" },
]

export function OnboardingWizard() {
    const router = useRouter()
    const [step, setStep] = React.useState(1)
    const [isLoading, setIsLoading] = React.useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm<ProfileData>({
        resolver: zodResolver(profileSchema),
        mode: "onChange",
    })

    const handleNext = async () => {
        let isValid = false
        if (step === 1) {
            isValid = await trigger(["fullName", "phoneNumber"])
        } else if (step === 2) {
            isValid = await trigger(["nationality", "visaType"])
        }

        if (isValid) {
            if (step === 2) {
                handleSubmit(onSubmit)()
            } else {
                setStep((s) => s + 1)
            }
        }
    }

    const onSubmit = async (data: ProfileData) => {
        setIsLoading(true)
        try {
            // Mock API call
            console.log("Onboarding Data:", data)
            await new Promise(resolve => setTimeout(resolve, 1500))
            setStep(3) // Move to completion step
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleComplete = () => {
        router.push("/dashboard") // Or home
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Progress */}
            <div className="mb-8 ">
                <div className="flex justify-between">
                    {STEPS.map((s) => (
                        <div key={s.id} className={cn("flex flex-col items-center space-y-2", s.id <= step ? "text-primary-600" : "text-muted-foreground")}>
                            <div className={cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold",
                                s.id < step ? "border-primary-600 bg-primary-600 text-white" :
                                    s.id === step ? "border-primary-600 bg-background" : "border-muted-foreground bg-background"
                            )}>
                                {s.id < step ? <CheckCircle2 className="h-5 w-5" /> : s.id}
                            </div>
                            <span className="text-xs font-medium">{s.title}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-secondary-100 dark:bg-secondary-900">
                    <div className="h-full rounded-full bg-primary-600 transition-all duration-300" style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }} />
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{STEPS[step - 1].title}</CardTitle>
                    <CardDescription>{STEPS[step - 1].description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {step === 1 && (
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="fullName">이름 (Full Name)</Label>
                                <Input id="fullName" placeholder="Hong Gil Dong" {...register("fullName")} />
                                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phoneNumber">휴대폰 번호</Label>
                                <Input id="phoneNumber" placeholder="010-1234-5678" {...register("phoneNumber")} />
                                {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="nationality">국적 (Nationality)</Label>
                                <select
                                    id="nationality"
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus-visible:ring-primary-300"
                                    {...register("nationality")}
                                >
                                    <option value="">선택해주세요</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="USA">USA</option>
                                    <option value="China">China</option>
                                    {/* Add more */}
                                </select>
                                {errors.nationality && <p className="text-sm text-red-500">{errors.nationality.message}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="visaType">비자 타입 (Visa Status)</Label>
                                <select
                                    id="visaType"
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus-visible:ring-primary-300"
                                    {...register("visaType")}
                                >
                                    <option value="">선택해주세요</option>
                                    <option value="E-7">E-7 (비자명)</option>
                                    <option value="E-9">E-9</option>
                                    <option value="D-2">D-2 (유학)</option>
                                    <option value="D-10">D-10 (구직)</option>
                                    <option value="F-2">F-2 (거주)</option>
                                    <option value="F-5">F-5 (영주)</option>
                                </select>
                                {errors.visaType && <p className="text-sm text-red-500">{errors.visaType.message}</p>}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="flex flex-col items-center justify-center py-6 text-center">
                            <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600">
                                <CheckCircle2 className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">환영합니다!</h3>
                            <p className="mt-2 text-muted-foreground">
                                프로필 설정이 완료되었습니다.<br />
                                이제 Peeple Jobs의 모든 기능을 이용하실 수 있습니다.
                            </p>
                        </div>
                    )}

                </CardContent>
                <CardFooter className="flex justify-between">
                    {step < 3 && (
                        <Button variant="ghost" onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1 || isLoading}>
                            이전
                        </Button>
                    )}

                    {step < 3 ? (
                        <Button onClick={handleNext} disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {step === 2 ? "완료" : "다음"}
                        </Button>
                    ) : (
                        <Button className="w-full" onClick={handleComplete}>
                            시작하기
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}
