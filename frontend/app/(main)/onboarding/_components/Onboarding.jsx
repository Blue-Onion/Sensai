"use client"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { zodResolver } from "@hookform/resolvers/zod"
import { onBoardingSchema } from "@/app/lib/schema"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import useFetch from "@/hooks/use-fetch"
import { toast } from "sonner"
import { updateUser } from "@/actions/user"
import { Loader2 } from "lucide-react"

const Onboarding = ({ industries }) => {
    const [selectedIndustry, setSelectedIndustry] = useState(null)
    const router = useRouter()
    const { data: updateResult, fn: updateUserFn, loading: updateLoading } = useFetch(updateUser)

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        resolver: zodResolver(onBoardingSchema)
    })
    const watchIndustry = watch("industry")
    const onSubmit = async (values) => {
        try {
            const formattedIndustry = `${values.industry}-${values.subIndustry.toLowerCase().replace(/ /g, "-")}`
            await updateUserFn({ ...values, industry: formattedIndustry, })
        } catch (error) {
            console.error(error.message)
        }


    }
    useEffect(() => {
        if (updateResult?.success) { // Fix the typo & remove contradictory check
            toast.success("Profile Completed Successfully")
            router.push("/dashboard")
            router.refresh()
        }
    }, [updateResult]) // `updateLoading` is unnecessary here
    


    return (
        <div className="flex justify-center items-start min-h-screen bg-background">
            <Card className="w-full max-w-lg mt-10 mx-4 p-6">
                <CardHeader className="text-center">
                    <CardTitle className="gradient-title text-3xl font-bold">
                        Complete Your Profile
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                        Select Your Industry to get Personalized Career Insights and Recommendations
                    </CardDescription>
                </CardHeader>
                <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
                    <CardContent className="space-y-4">
                        {/* Industry Selection */}
                        <div className="space-y-2">
                            <Label htmlFor="industry" className="text-base font-medium">Industry</Label>
                            <Select
                                onValueChange={(value) => {
                                    setValue("industry", value)
                                    setSelectedIndustry(
                                        industries.find((ind) => ind.id == value)
                                    )
                                    setValue("subIndustry", "")
                                }}
                            >
                                <SelectTrigger id="industry" className="w-full">
                                    <SelectValue placeholder="Select Your Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    {industries.map((ind) => (
                                        <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.industry && (
                                <p className="text-sm text-red-500">{errors.industry.message}</p>
                            )}
                        </div>

                        {/* Specialization Selection */}
                        {watchIndustry && <div className="space-y-2">
                            <Label htmlFor="subIndustry" className="text-base font-medium">Specialization</Label>
                            <Select
                                onValueChange={(value) => {
                                    setValue("subIndustry", value)
                                }}
                            >
                                <SelectTrigger id="subIndustry" className="w-full">
                                    <SelectValue placeholder="Select Your Specialization" />
                                </SelectTrigger>
                                <SelectContent>
                                    {selectedIndustry?.subIndustries?.map((ind) => (
                                        <SelectItem value={ind} key={ind}>{ind}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.subIndustry && (
                                <p className="text-sm text-red-500">{errors.subIndustry.message}</p>
                            )}
                        </div>}
                        <div className="space-y-2">
                            <Label htmlFor="experince" className="text-base font-medium">Years of Experience</Label>
                            <Input
                                id="experince"
                                type="number"
                                min="0"
                                max="50"
                                placeholder="Enter Years Of Experince"
                                {...register("experience")}
                            />
                            {errors.experience && (
                                <p className="text-sm text-red-500">{errors.experience.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="skills" className="text-base font-medium">Skills</Label>
                            <Input
                                id="skills"

                                placeholder="eg Python,Java,C"
                                {...register("skills")}

                            />
                            <p className="text-sm text-muted-foreground">Sperate multiple skill with commas</p>
                            {errors.skills && (
                                <p className="text-sm text-red-500">{errors.skills.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio" className="text-base font-medium">Bio</Label>
                            <Textarea
                                id="bio"
                                className="h-32"
                                placeholder="Tell us about your proffesional background"
                                {...register("bio")}

                            />

                            {errors.bio && (
                                <p className="text-sm text-red-500">{errors.bio.message}</p>
                            )}
                        </div>
                        <Button type="submit" disabled={updateLoading} className="w-full">
                            {updateLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                "Complete Your Profile"
                            )}
                        </Button>

                    </CardContent>
                </form>
            </Card>
        </div>
    )
}

export default Onboarding
