"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from "date-fns"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState, useEffect } from "react"
const PerformanceChart = ({ assessments }) => {
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    if (assessments) {
      const formattedData = assessments.map((assesment) => ({
        date: format(new Date(assesment.createdAt), "MMM dd"),
        score: assesment.quizScore,
      })
      )
      setChartData(formattedData)
    }
  }, [assessments])
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl gradient-title md:text-4xl">Performance Trend</CardTitle>
          <CardDescription>Your Quiz Score Over Time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
             
                data={chartData}
                
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0,100]} />
                <Tooltip content={({active,payload}) => {
                  if(active&&payload.length){
                    return(
                      <div className='bg-background border rounded-lg p-2 shadow-md'>
                        <p className='text-sm font-medium'>
                          Score:{payload[0].value}%
                        </p>
                        <p className='text-xs text-muted-foreground'>
                          Score:{payload[0].payload.date}%
                        </p>
                       
                      </div>
                    )
                  }
                }
                } />

                <Line type="monotone" dataKey="score" stroke="rgba(255, 255, 255, 0.7)"

 strokeWidth={2} />
                
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>

      </Card>

    </div>
  )
}

export default PerformanceChart
