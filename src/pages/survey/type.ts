// types.ts

// Question type for survey
export interface Question {
    id: number;
    question: string;
    type: "rating" | "text"; // Defines two types of questions
    scale?: number; // Only for rating questions
  }
  
  // Answers type
  export interface Answers {
    [key: number]: number | string;
  }
  