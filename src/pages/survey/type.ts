
export type QuestionType = "rating" | "text";
export interface Question {
    id: number;
    question: string;
    type: "rating" | "text"; // Defines two types of questions
    scale?: number; // Only for rating questions
  }
  
  
  export interface Answers {
    [key: number]: number | string;
  }
  