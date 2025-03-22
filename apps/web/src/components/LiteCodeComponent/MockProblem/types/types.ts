export interface ResponseProblem {
  problemNumber: string;
  problemId: string;
  problemTitle: string;
  inputText1: string;
  inputText2?: string;
  inputText3?: string;
  difficulty: Difficulty;
  likesCount: number;
  dislikeCount: number;
  handlerFunc: ((fn: any) => boolean) | string;
  starterFunction: string;
}

export interface ResponseTestCases {
  id: string;
  problemId: string;
  input: any;
  output: any;
}

export interface ResponseExample {
  id: string;
  problemId: string;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
}

export interface Example {
  problemId: string;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
}

export interface TestCases {
  input: any;
  problemId: string;
  output: any;
}

export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export interface Problem {
  problemNumber: string;
  problemId: string;
  problemTitle: string;
  inputText1: string;
  inputText2?: string;
  inputText3?: string;
  difficulty: Difficulty;
  likesCount: number;
  dislikeCount: number;
  examples: Example[];
  testCases: TestCases[];
  handlerFunc: ((fn: any) => boolean) | string;
  starterFunction: string;
}
