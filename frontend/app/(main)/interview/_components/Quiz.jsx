"use client"

import { generateQuiz, saveQuizResult } from "@/actions/interview"
import useFetch from "@/hooks/use-fetch"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarLoader } from "react-spinners"
import { toast } from "sonner"
import QuizResult from "./QuizResult"



const Quiz = () => {
    const [Currentquestion, setCurrentquestion] = useState(0)
    const [answers, setanswers] = useState([])
    const [showExplanation, setshowExplanation] = useState(false)
    const { loading: generatingQuiz, fn: generateQuizfn, data: quizData } = useFetch(generateQuiz)
    const { loading: savingResult, fn: saveQuizResultfn, data: resultData, setdata: setResultData } = useFetch(saveQuizResult)
    useEffect(() => {
        if (quizData) {

            setanswers(new Array(quizData.length).fill(null))
        }
    }, [quizData])

    if (generatingQuiz) {
        return <BarLoader className="mt-4" width={'100%'} color="gray" />
    }
    if (!quizData) {
        return <Card className={"mx-2"}>
            <CardHeader>
                <CardTitle>Ready to test Your Knowledge ?</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    This quiz is all about your industry, but no pressure—think of it as a fun little challenge! Take your time, trust your instincts, and let’s see how you do! 🚀
                </p>

            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={generateQuizfn}>Start Quiz</Button>
            </CardFooter>
        </Card>

    }
    const handleChange = (answer) => {
        const newAnswer = [...answers];
        newAnswer[Currentquestion] = answer;
        setanswers(newAnswer)
    }
    const handleNext = (answer) => {
        if (Currentquestion < quizData.length - 1) {
            setCurrentquestion(Currentquestion + 1)
            setshowExplanation(false)

        }
        else {
            finishQuiz()
        }
    }
    const startNewQuiz = () => {
        setCurrentquestion(0);
        setanswers([]);
        setshowExplanation(false);
        setResultData(null);
        generateQuizfn(); // Trigger quiz generation again
    };
    const calaculateScore = () => {
        let correct = 0
        answers.forEach((answer, index) => {
            if (answer == quizData[index].correctAnswer) {
                correct++
            }
        }

        )
        return (correct / (quizData.length)) * 100

    }

    const finishQuiz = async () => {
        const score = calaculateScore();
        try {
            await saveQuizResultfn(quizData, answers, score)
            toast.success("Quiz Completed")
        } catch (error) {
            toast.error(error.message || "Failed to Save Quiz")
        }

    }


    const question = quizData[Currentquestion]

    if (resultData) {
        return (
            <div className="mx-2">
                <QuizResult result={resultData} onStartNew={startNewQuiz} />
            </div>
        )
    }

    return (
        <Card className="mx-2">
            <CardHeader>
                <CardTitle>Question {Currentquestion + 1} of {quizData.length}</CardTitle>

            </CardHeader>
            <CardContent className={"space-y-4"}>
                <p className="text-lg font-medium">
                    {question.question}
                </p>

                <RadioGroup onValueChange={handleChange} value={answers[Currentquestion]}>
                    {question.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`}>{option}</Label>
                        </div>
                    ))}
                </RadioGroup>
                {showExplanation && <div className="mt-4 p-4 bg-muted rounded-xl">
                    <p className="font-medium">Explanation:</p>
                    <p className="text-muted-foreground">{question.explanation}</p>
                </div>}
            </CardContent>
            <CardFooter>
                {!showExplanation && <>

                    <Button variant={"outline"}
                        onClick={() => setshowExplanation(true)}
                        disabled={!answers[Currentquestion]}
                    >
                        Show explanation
                    </Button>
                </>}
                <Button className={"ml-auto"}
                    onClick={handleNext}
                    disabled={!answers[Currentquestion] || savingResult}
                >

                    {Currentquestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
            </CardFooter>
        </Card>
    );

}

export default Quiz
