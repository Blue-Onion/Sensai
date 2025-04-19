import React from 'react'
import Onboarding from './_components/Onboarding'
import { industries } from '@/data/industries'
import { getUserOnboarding } from '@/actions/user'
import { redirect } from 'next/navigation'

const page = async() => {
    const {isOnboarded}=await getUserOnboarding()
    if(isOnboarded){
        redirect("/dashboard")
    }
  return (
    <div>
        <Onboarding industries={industries}/>
      
    </div>
  )
}

export default page
