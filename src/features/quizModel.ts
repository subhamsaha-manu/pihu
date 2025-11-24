export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizData {
  quizTitle: string;
  questions: Question[];
}
