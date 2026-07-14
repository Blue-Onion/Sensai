import { getAssessments } from '@/actions/interview'
import React from 'react'
import QuizList from './_components/QuizList'
import PerformanceChart from './_components/PerformanceChart'
import StatsQuiz from './_components/StatsQuiz'

const page = async() => {
  const assessments=await getAssessments()
  return (
    <div>
      <h1 className="text-6xl gradient-title">Interview Preparation</h1>
      <div className="space-y-6">
        <StatsQuiz assessments={assessments}/>
        <PerformanceChart assessments={assessments}/>
        <QuizList assessments={assessments} />  

      </div>
    </div>
  )
}

export default page
