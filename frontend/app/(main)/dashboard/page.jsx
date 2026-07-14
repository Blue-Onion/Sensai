import { getIndustryInsights } from '@/actions/dashboard'
import { getUserOnboarding } from '@/actions/user'
import { redirect } from 'next/navigation'
import DashboardView from './_components/DashboardView'
import React from 'react'

const page = async () => {
    const { isOnboarded } = await getUserOnboarding()

    if (!isOnboarded) {
        return redirect("/onboarding") // Return this directly in server components
    }

    const insights = await getIndustryInsights()

    return (
        <div className='mx-auto container'>
            <DashboardView insights={insights} />
        </div>
    )
}

export default page
