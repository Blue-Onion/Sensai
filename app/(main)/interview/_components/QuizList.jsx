"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertDialogHeader } from '@/components/ui/alert-dialog'
import QuizResult from './QuizResult'


const QuizList = ({ assessments }) => {
  const router = useRouter()
  const [selectedQuiz, setselectedQuiz] = useState(null)


  return (
    <>
      <Card>
        <CardHeader className={"flex flex-row justify-between items-center"}>
          <div className="">

            <CardTitle className={"gradient-title text-3xl md:text-4xl"}>Recent Quizes</CardTitle>
            <CardDescription>Review your Past Quiz Performances</CardDescription>
          </div>
          <Button onClick={() => router.push("/interview/mock")} >
            Start New Quiz
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assessments?.length > 0 ? (
              assessments.map((assessment, i) => (
                <Card className="cursor-pointer hover:bg-muted/50 transitation-colors"
                  onClick={() => setselectedQuiz(assessment)}
                  key={assessment.id}>
                  <CardHeader>
                    <CardTitle>Quiz {i + 1}</CardTitle>
                    <CardDescription className={"flex justify-between w-full "}>
                      <div>Score: {assessment.quizScore.toFixed(1)}%</div>
                      <div>{format(new Date(assessment.createdAt), "MMMM dd, yyyy HH:mm")}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>{assessment.improvementTip}</p>
                  </CardContent>

                </Card>
              ))
            ) : (
              <p>No quizzes available.</p>
            )}

          </div>
        </CardContent>
        <Dialog open={!!selectedQuiz} onOpenChange={() => setselectedQuiz(null)}>

          <DialogContent className={"max-w-3xl max-h-[90vh] overflow-y-auto"}>
       <DialogHeader>

              <DialogTitle></DialogTitle>
              <QuizResult
              result={selectedQuiz}
              onStartNew={()=>router.push("/interview/mock")}
              hideStartnew
              />
       </DialogHeader>
          </DialogContent>
        </Dialog>

      </Card>

    </>
  )
}

export default QuizList
