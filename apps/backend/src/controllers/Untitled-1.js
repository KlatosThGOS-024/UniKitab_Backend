// Assuming this is the JSON data you've received
const response = {
  success:
    '```json\n{\n  "problemNumber": 101,\n  "problemId": "find-max-min",\n  "problemTitle": "Find Maximum and Minimum in an Array",\n  "inputText1": "Given an array of numbers, find the maximum and minimum values.",\n  "inputText2": "The function should return an object containing the maximum and minimum values in the input array. Handle edge cases such as empty arrays and arrays with only one element.",\n  "inputText3": "For the input array [3, 1, 4, 1, 5, 9, 2, 6], the function should return { max: 9, min: 1 }.",\n  "difficulty": "Easy",\n  "likesCount": 0,\n  "dislikeCount": 0,\n  "examples": [\n    {\n      "inputText": "[3, 1, 4, 1, 5, 9, 2, 6]",\n      "outputText": "{ max: 9, min: 1 }",\n      "explanation": "The largest number is 9 and the smallest is 1."\n    },\n    {\n      "inputText": "[1]",\n      "outputText": "{ max: 1, min: 1 }",\n      "explanation": "The array contains only one element, which is both the maximum and minimum."\n    },\n    {\n      "inputText": "[]",\n      "outputText": "{ max: undefined, min: undefined }",\n      "explanation": "The array is empty, so there is no maximum or minimum."\n    },\n    {\n      "inputText": "[-1, -5, 0, -2]",\n      "outputText": "{ max: 0, min: -5 }",\n      "explanation": "The largest number is 0 and the smallest is -5."\n    }\n  ],\n  "testCases": [\n    {\n      "input": "[10, 5, 20, 15, 30]",\n      "output": {"max": 30, "min": 5}\n    },\n    {\n      "input": "[-5, -10, 0, 5]",\n      "output": {"max": 5, "min": -10}\n    },\n    {\n      "input": "[1, 1, 1, 1]",\n      "output": {"max": 1, "min": 1}\n    },\n    {\n      "input": "[]",\n      "output": {"max": undefined, "min": undefined}\n    },\n    {\n      "input": "[5]",\n      "output": {"max": 5, "min": 5}\n    },\n    {\n      "input": "[-100, 100, 0, -50, 50]",\n      "output": {"max": 100, "min": -100}\n    },\n    {\n      "input": "[1.5, 2.7, 0.8, 3.2, -1.1]",\n      "output": {"max": 3.2, "min": -1.1}\n    }\n  ],\n  "handlerFunc": "function testMinMax(func, testCase) {\\n  const result = func(testCase.input);\\n  return JSON.stringify(result) === JSON.stringify(testCase.output);\\n}",\n  "starterFunctionName": "function findMinMax(arr) {\\n  // Your code here\\n  if (arr.length === 0) {\\n    return { max: undefined, min: undefined };\\n  }\\n  let min = arr[0];\\n  let max = arr[0];\\n  for (let i = 1; i < arr.length; i++) {\\n    if (arr[i] < min) {\\n      min = arr[i];\\n    }\\n    if (arr[i] > max) {\\n      max = arr[i];\\n    }\\n  }\\n  return { max: max, min: min };\\n}"\n}\n```',
  message: "Successfully get the answer",
  satusCode: 200,
};

// Step 1: Extract the JavaScript code from the success field
const codeBlock = response.success.match(/```json\n([\s\S]+?)\n```/);
console.log(codeBlock);
// Step 2: Evaluate or parse the JavaScript to get the data (this assumes `problemData` is within the code block)
const problemData = eval(codeBlock[1]);

// Step 3: Extract key data from problemData
const problemTitle = problemData.problemTitle;
const description = problemData.inputText1; // You can also use inputText2, inputText3 for more context
const examples = problemData.examples;
const testCases = problemData.testCases;

// Step 4: Structure it in a readable format
const structuredData = {
  title: problemTitle,
  description: description,
  examples: examples.map((example) => ({
    input: example.input,
    output: example.output,
    explanation: example.explanation,
  })),
  testCases: testCases.map((testCase) => ({
    input: testCase.input,
    expectedOutput: testCase.expectedOutput,
  })),
};

console.log(structuredData);
const problemDatad = {
  problemNumber: 1,
  problemId:
    'find-max-min",\n  problemTitle: "Find Maximum and Minimum in an Array",\n  inputText1: "Given an array of numbers, find the maximum and minimum values.",\n  inputText2: "The function should efficiently determine the maximum and minimum elements within a numerical array.  It should handle empty arrays gracefully and return appropriate default values (e.g., null or undefined) in such cases.",\n  inputText3: "For the input array [3, 1, 4, 1, 5, 9, 2, 6], the function should return {max: 9, min: 1}.",\n  difficulty: "Easy",\n  likesCount: 0,\n  dislikeCount: 0,\n  examples: [\n    {\n      inputText: ["[3, 1, 4, 1, 5, 9, 2, 6]"],\n      outputText: ["{\\"max\\": 9, \\"min\\": 1}"]\n    },\n    {\n      inputText: ["[]"],\n      outputText: ["{\\"max\\": null, \\"min\\": null}"]\n    },\n    {\n      inputText: ["[10]"],\n      outputText: ["{\\"max\\": 10, \\"min\\": 10}"]\n    },\n    {\n      inputText: ["[-1, -5, -2]"],\n      outputText: ["{\\"max\\": -1, \\"min\\": -5}"]\n    }\n  ],\n  testCases: [\n    {\n      input: ["[1, 5, 2, 8, 3]"],\n      output: ["{\\"max\\": 8, \\"min\\": 1}"]\n    },\n    {\n      input: ["[-10, 0, 10, -5, 5]"],\n      output: ["{\\"max\\": 10, \\"min\\": -10}"]\n    },\n    {\n      input: ["[100, 100, 100]"],\n      output: ["{\\"max\\": 100, \\"min\\": 100}"]\n    },\n    {\n      input: ["[]"],\n      output: ["{\\"max\\": null, \\"min\\": null}"]\n    },\n    {\n      input: ["[1.5, 2.7, 0.8, 4.2]"],\n      output: ["{\\"max\\": 4.2, \\"min\\": 0.8}"]\n    }\n\n  ],\n  imageUrl: null, //Optional Image URL\n  handlerFunc: `function testMinMax(arr) {\n    let max = null;\n    let min = null;\n    if (arr.length === 0) {\n      return { max: null, min: null };\n    }\n    for (let i = 0; i < arr.length; i++) {\n      if (max === null || arr[i] > max) {\n        max = arr[i];\n      }\n      if (min === null || arr[i] < min) {\n        min = arr[i];\n      }\n    }\n    return { max: max, min: min };\n  }`,\n  starterFunctionName: "findMinMax"\n};\n\n\nconsole.log(JSON.stringify(problemData, null, 2));\n```',
};
console.log(JSON.stringify(problemData, null, 2));
