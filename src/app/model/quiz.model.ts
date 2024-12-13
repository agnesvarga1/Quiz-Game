export interface ApiResponse {
  response_code: number;
  results: QuizResult[];
}

export interface QuizResult {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
