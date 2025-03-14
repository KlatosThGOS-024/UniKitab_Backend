import { Problem } from "./types/types";
import { deleteMiddleNode } from "./deleteMiddleNode";
import { gcdOfStrings } from "./generateCommonDivisorOfString";
import { robBankDayProblem } from "./goodDayToRobBank";

import { twoSum } from "./twoSum";
import { zigZagConversion } from "./ZigZag";
interface ProblemMap {
  [key: string]: Problem;
}
export const problems: ProblemMap = {
  twoSum,
  gcdOfStrings,
  deleteMiddleNode,
  robBankProblem: robBankDayProblem,
  ZigzagConversioNproblem: zigZagConversion,
};
