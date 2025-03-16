export type ResponseProblem = {
  problemNumber: number;
  problemId: string;
  title: string;
  inputText1: string;
  inputText2?: string;
  inputText3?: string;
  difficulty: Difficulty;
  likesCount: number;
  dislikeCount: number;
  handlerFunc: ((fn: any) => boolean) | string;
  starterFunctionName: string;
};
export type ResponseTestCases = {
  id: string;
  problemId: string;
  input: any;
  output: any;
};

export type ResponseExample = {
  id: string;
  problemId: string;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
};

export type Example = {
  problemId: string;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
};

export type TestCases = {
  input: any;
  problemId: string;
  output: any;
};
export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export type Problem = {
  problemNumber: string;
  problemId: string;
  title: string;
  inputText1: string;
  inputText2?: string;
  inputText3?: string;
  difficulty: Difficulty;
  likesCount: string;
  dislikeCount: string;
  examples: Example[];
  testCases: TestCases[];
  handlerFunc: ((fn: any) => boolean) | string;
  starterFunctionName: string;
};
