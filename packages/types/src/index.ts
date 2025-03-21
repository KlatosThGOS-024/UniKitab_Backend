import {
  ResponseProblem,
  Problem,
  Example,
  TestCases,
  ResponseExample,
  ResponseTestCases,
  Difficulty,
} from "./types";
export default interface QuestionType {
  ResponseProblem: ResponseProblem;
  ResponseTestCases: ResponseTestCases;
  Problem: Problem;
  Example: Example;
  TestCases: TestCases;
  ResponseExample: ResponseExample;
  Difficulty: Difficulty;
}
