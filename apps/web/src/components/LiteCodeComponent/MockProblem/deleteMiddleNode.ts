import { Difficulty, Example, Problem } from "./types/types";

const examples: Example[] = [
  {
    inputText: "head = [1, 2, 3, 4, 5]",
    outputText: "[1, 2, 4, 5]",
    explanation:
      "The middle node of the list [1, 2, 3, 4, 5] is 3. After deleting it, the result is [1, 2, 4, 5].",
  },
  {
    inputText: "head = [1, 2, 3, 4]",
    outputText: "[1, 2, 4]",
    explanation:
      "The middle node of the list [1, 2, 3, 4] is 3. After deleting it, the result is [1, 2, 4].",
  },
  {
    inputText: "head = [1]",
    outputText: "[]",
    explanation:
      "The list only contains one node, so after deleting the middle, it becomes empty.",
  },
];

const starterCodeDeleteMiddle = `function deleteMiddleNode(head) {
  // Write your code here
};`;
const handlerDeleteMiddle = (
  fn: (head: ListNode | null) => ListNode | null
) => {
  try {
    // Helper function to convert an array to a linked list
    const arrayToLinkedList = (arr: number[]): ListNode | null => {
      if (arr.length === 0) return null;
      const head: ListNode = { val: arr[0], next: null };
      let current: ListNode = head;
      for (let i = 1; i < arr.length; i++) {
        current.next = { val: arr[i], next: null };
        current = current.next;
      }
      return head;
    };

    // Helper function to convert a linked list back to an array
    const linkedListToArray = (head: ListNode | null): number[] => {
      const result: number[] = [];
      while (head !== null) {
        result.push(head.val);
        head = head.next;
      }
      return result;
    };

    const testLists = [[1, 2, 3, 4, 5], [1, 2, 3, 4], [1]];
    const answers = [[1, 2, 4, 5], [1, 2, 4], []];

    for (let i = 0; i < testLists.length; i++) {
      const result = fn(arrayToLinkedList(testLists[i]));
      const resultArray = linkedListToArray(result);
      if (JSON.stringify(resultArray) !== JSON.stringify(answers[i])) {
        console.log(resultArray);
        throw new Error(
          `Error at index ${i}: expected ${JSON.stringify(
            answers[i]
          )}, got ${JSON.stringify(resultArray)}`
        );
      }
    }
    return true;
  } catch (error: any) {
    console.log("deleteMiddleNode handler function error");
    throw new Error(error);
  }
};

// Helper functions to convert arrays to linked lists and vice versa
type ListNode = {
  val: number;
  next: ListNode | null;
};

const testCases = [
  {
    input: {
      head: [1, 2, 3, 4, 5],
    },
    output: {
      answer: [1, 2, 4, 5],
    },
  },
  {
    input: {
      head: [1, 2, 3, 4],
    },
    output: {
      answer: [1, 2, 4],
    },
  },
  {
    input: {
      head: [1],
    },
    output: {
      answer: [],
    },
  },
];

export const deleteMiddleNode: Problem = {
  problemNumber: 1,
  problemId: "51204888-9af6-4e7d-9baf-81926c78edf4",

  title: "Delete Middle Node of Linked List",
  inputText1:
    "Given the head of a singly linked list, delete the middle node of the linked list.",
  inputText2:
    "If the list contains only one node, return an empty list after deleting it.",
  inputText3:
    "You can assume the linked list will always have at least one node.",
  difficulty: Difficulty.Medium,
  likesCount: 0,
  dislikeCount: 0,
  examples,
  testCases: testCases,
  handlerFunc: handlerDeleteMiddle,
  starterFunctionName: starterCodeDeleteMiddle,
};
