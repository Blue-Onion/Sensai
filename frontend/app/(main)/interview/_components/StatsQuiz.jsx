import { Brain, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatsQuiz = ({ assessments }) => {
  const getAverageScore = () => {
    if (!assessments.length) return null;

    const total = assessments.reduce((sum, assesment) => sum + assesment.quizScore, 0);
    
    return (total / assessments.length).toFixed(1);
  };

  const getTotalQuestion = () => {
    if (!assessments.length) return 0;

    return assessments.reduce((sum, assesment) => sum + assesment.questions.length, 0);
  };

  const getLatestAssesment = () => {
    if (!assessments.length) return null;

    
    return assessments[0];
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Average Score</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getAverageScore()}%</div>
          <div className="h-2 w-full rounded-full">Across all Assignments</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Question Practiced</CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getTotalQuestion()}</div>
          <div className="h-2 w-full rounded-full">Total Question</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Latest Score</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getLatestAssesment()?.quizScore.toFixed(1)||0}%</div>
          <div className="h-2 w-full rounded-full">Most Recent Quiz</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsQuiz;
