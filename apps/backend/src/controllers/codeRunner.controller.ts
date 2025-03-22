import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asynchHandler";
import { ApiResponse } from "../utils/ApiResponse";
import vm from "vm";
import axios from "axios";

interface TestCase {
  input: any;
  expected: any;
}

interface CodeRunRequest {
  code: string;
  problemDescription?: string;
  timeLimit?: number;
  memoryLimit?: number;
  problemId?: string;
}

interface TestCaseResult {
  input: any;
  expected: any;
  actual: any;
  passed: boolean;
  error?: string;
  executionTime?: number;
  consoleOutput?: string[];
}

interface TestSummary {
  total: number;
  passed: number;
  failed: number;
  passPercentage: number;
  totalExecutionTime: number;
}

const geminiFormatAndRunCode = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const {
        code,
        problemDescription,
        problemId = "custom",
        timeLimit = 3000,
        memoryLimit = 512,
      }: CodeRunRequest = req.body;

      console.log("Request body:", req.body);

      // Validate inputs
      if (!code || typeof code !== "string" || code.trim() === "") {
        throw new ApiError("Code is required and must not be empty", 400);
      }

      // Format the code using Gemini API
      const formattedCode = await formatCodeWithGemini(
        code,
        problemDescription
      );

      // Generate test cases using the problem description or code analysis
      const testCases = await generateTestCasesWithGemini(
        formattedCode,
        problemDescription ||
          "Generate test cases for the following code: " + code,
        problemId
      );

      if (!testCases || testCases.length === 0) {
        throw new ApiError("Failed to generate test cases", 400);
      }

      // Run the code against generated test cases
      const runResults = await runCodeWithTestCases(
        formattedCode,
        testCases,
        timeLimit,
        memoryLimit
      );

      // Return response with formatted code and results
      res.json(
        new ApiResponse(200, true, "Code optimized and executed successfully", {
          originalCode: code,
          optimizedCode: formattedCode,
          results: runResults,
        })
      );
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      if (axios.isAxiosError(error)) {
        throw new ApiError(
          `Code runner error: ${error.response?.data?.message || error.message}`,
          error.response?.status || 500
        );
      }

      throw new ApiError(
        `Failed to process code: ${error instanceof Error ? error.message : "Unknown error"}`,
        500
      );
    }
  }
);

/**
 * Format and optimize code using Gemini AI API
 */
async function formatCodeWithGemini(
  code: string,
  problemDescription?: string
): Promise<string> {
  const api = process.env.AiAPI;

  if (!api) {
    throw new Error("AI API key is not configured");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

  const promptContext = problemDescription
    ? `Given this problem description: "${problemDescription}"`
    : "Based on the code structure and purpose";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `${promptContext}, format and optimize the following code for readability and performance:

${code}

Format the code following these requirements:
1. Ensure the solution is implemented through a function named "solution"
2. Keep the same algorithm/approach but improve formatting, variable names, and efficiency
3. Add comments to explain complex logic
4. Fix any potential bugs or edge cases
5. Return only the optimized code, with no explanations before or after

IMPORTANT: Return only the formatted code, no explanations or markdown. The code must have a function named "solution" that accepts the input parameter.
`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 2048,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`AI service error: ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();

  if (
    !data.candidates ||
    !data.candidates[0] ||
    !data.candidates[0].content ||
    !data.candidates[0].content.parts[0]
  ) {
    throw new Error("Invalid response from AI service");
  }

  let formattedCode = data.candidates[0].content.parts[0].text;

  // Remove any markdown code blocks if present
  formattedCode = formattedCode.replace(
    /```(?:javascript|js)?\n([\s\S]*?)\n```/g,
    "$1"
  );

  // Ensure code has a solution function
  if (!formattedCode.includes("function solution")) {
    // Extract function name if another function exists
    const functionMatch = formattedCode.match(/function\s+(\w+)/);
    if (functionMatch && functionMatch[1] !== "solution") {
      // Rename the function to solution
      formattedCode = formattedCode.replace(
        new RegExp(`function\\s+${functionMatch[1]}`, "g"),
        "function solution"
      );
    } else {
      // Wrap code in a solution function if no function exists
      formattedCode = `function solution(input) {
  ${formattedCode.trim().split("\n").join("\n  ")}
}`;
    }
  }

  return formattedCode;
}

/**
 * Generate test cases from problem description or code using Gemini AI API
 */
/**
 * Generate test cases from problem description or code using Gemini AI API
 */
async function generateTestCasesWithGemini(
  code: string,
  description: string,
  problemId: string
): Promise<TestCase[]> {
  const api = process.env.AiAPI;

  if (!api) {
    throw new Error("AI API key is not configured");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `Given this code and description:

CODE:
${code}

DESCRIPTION:
${description}

Generate a comprehensive JSON array of test cases that cover normal cases and edge cases for this solution.

Generate test cases in this format:
[
  {
    "input": "Value that will be passed to the solution function",
    "expected": "Expected output from the solution function"
  }
]

Make sure to:
1. Include at least 5 test cases covering different scenarios
2. Include edge cases (empty inputs, large values, etc.)
3. Return valid JSON only, no explanations
4. Format the inputs and expected outputs as VALID JSON (not JavaScript)
   - Use actual numeric values instead of JavaScript constants like Number.MAX_SAFE_INTEGER
   - For extremely large numbers, use numeric values within safe integer range
   - All property names and string values must be in double quotes
5. Analyze the code to determine the correct expected outputs
6. Make sure the input format matches what the solution function expects

IMPORTANT: Your response should be ONLY the JSON array with no additional text.
`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 2048,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`AI service error: ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();

  if (
    !data.candidates ||
    !data.candidates[0] ||
    !data.candidates[0].content ||
    !data.candidates[0].content.parts[0]
  ) {
    throw new Error("Invalid response from AI service");
  }

  let testCasesText = data.candidates[0].content.parts[0].text;

  // Remove any markdown code blocks if present
  testCasesText = testCasesText.replace(
    /```(?:json|js)?\n([\s\S]*?)\n```/g,
    "$1"
  );

  // Replace JavaScript constants with their actual values before parsing
  testCasesText = testCasesText
    .replace(/Number\.MAX_SAFE_INTEGER/g, "9007199254740991")
    .replace(/Number\.MIN_SAFE_INTEGER/g, "-9007199254740991")
    .replace(/Number\.MAX_VALUE/g, "1.7976931348623157e+308")
    .replace(/Number\.MIN_VALUE/g, "5e-324")
    .replace(/Number\.POSITIVE_INFINITY/g, "null")
    .replace(/Number\.NEGATIVE_INFINITY/g, "null")
    .replace(/Infinity/g, "null")
    .replace(/NaN/g, "null")
    .replace(/undefined/g, "null");

  try {
    const testCases = JSON.parse(testCasesText);
    if (!Array.isArray(testCases)) {
      throw new Error("Generated test cases are not in an array format");
    }
    return testCases;
  } catch (error) {
    console.error("Failed to parse test cases:", testCasesText);
    throw new Error(
      `Failed to parse generated test cases: ${error instanceof Error ? error.message : "Invalid format"}`
    );
  }
}

/**
 * Run code with generated test cases
 */
async function runCodeWithTestCases(
  code: string,
  testCases: TestCase[],
  timeLimit: number,
  memoryLimit: number
): Promise<{ results: TestCaseResult[]; summary: TestSummary }> {
  const results: TestCaseResult[] = [];
  let passedCount = 0;
  let totalExecutionTime = 0;

  for (const testCase of testCases) {
    const result = await runSingleTestCase(code, testCase, timeLimit);
    results.push(result);

    if (result.passed) {
      passedCount++;
    }

    if (result.executionTime) {
      totalExecutionTime += result.executionTime;
    }
  }

  const summary: TestSummary = {
    total: testCases.length,
    passed: passedCount,
    failed: testCases.length - passedCount,
    passPercentage: (passedCount / testCases.length) * 100,
    totalExecutionTime,
  };

  return { results, summary };
}

/**
 * Run a single test case
 */
async function runSingleTestCase(
  code: string,
  testCase: TestCase,
  timeLimit: number
): Promise<TestCaseResult> {
  const result: TestCaseResult = {
    input: testCase.input,
    expected: testCase.expected,
    actual: null,
    passed: false,
    consoleOutput: [],
  };

  // Create a sandbox context with limited capabilities
  const consoleOutput: string[] = [];
  const sandbox = {
    console: {
      log: (...args: any[]) => {
        const output = args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg) : String(arg)
          )
          .join(" ");
        consoleOutput.push(output);
      },
      error: (...args: any[]) => {
        const output = args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg) : String(arg)
          )
          .join(" ");
        consoleOutput.push(`ERROR: ${output}`);
      },
      warn: (...args: any[]) => {
        const output = args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg) : String(arg)
          )
          .join(" ");
        consoleOutput.push(`WARN: ${output}`);
      },
    },
    setTimeout,
    clearTimeout,
    Math,
    Date,
    Array,
    Object,
    String,
    Number,
    Boolean,
    Error,
    JSON,
    RegExp,
    Map,
    Set,
    Promise,
  };

  // Create VM context
  const context = vm.createContext(sandbox);

  // Wrap user code in a function that we can call with the test case input
  const wrappedCode = `
    (function userCodeRunner(input) {
      try {
        ${code}
        
        // Check if solution function exists
        if (typeof solution !== 'function') {
          throw new Error('Your code must define a function named "solution"');
        }
        
        // Call the solution function with the input
        return solution(input);
      } catch (error) {
        return { error: error.message || 'Unknown error' };
      }
    })
  `;

  try {
    // Compile the script
    const script = new vm.Script(wrappedCode, {
      filename: "usercode.js",
    });

    // Set up manual timeout
    const timeoutPromise = new Promise<never>((_, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error(`Execution timed out after ${timeLimit}ms`));
      }, timeLimit);
      // Store timeoutId somewhere if you need to clear it later
    });

    // Execute the code with timeout
    const startTime = performance.now();

    const executionPromise = Promise.resolve().then(() => {
      const userFunction = script.runInContext(context);
      return userFunction(testCase.input);
    });

    const output = await Promise.race([executionPromise, timeoutPromise]);
    const endTime = performance.now();

    result.executionTime = endTime - startTime;
    result.consoleOutput = consoleOutput;

    if (output && output.error) {
      result.error = output.error;
    } else {
      result.actual = output;

      // Compare output with expected result using deep comparison
      result.passed = deepEqual(output, testCase.expected);
    }
  } catch (error) {
    result.error = error instanceof Error ? error.message : "Execution error";
    result.consoleOutput = consoleOutput;
  }

  return result;
}

/**
 * Deep equality check for comparing expected and actual values
 */
function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (
    a === null ||
    b === null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return a === b;
  }

  // Handle Date objects
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // Handle Array objects
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // Handle plain objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// Keeping the original runCode function for backward compatibility
const runCode = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { code, testCases, timeLimit = 3000, memoryLimit = 512 } = req.body;

    if (!code || typeof code !== "string" || code.trim() === "") {
      throw new ApiError("Code is required and must not be empty", 400);
    }

    if (!testCases || !Array.isArray(testCases) || testCases.length === 0) {
      // If no test cases provided, generate them
      const generatedTestCases = await generateTestCasesWithGemini(
        code,
        "Generate test cases for the following code: " + code,
        "custom"
      );

      if (!generatedTestCases || generatedTestCases.length === 0) {
        throw new ApiError("Failed to generate test cases", 400);
      }

      const results = await runCodeWithTestCases(
        code,
        generatedTestCases,
        timeLimit,
        memoryLimit
      );

      res.json(
        new ApiResponse(
          200,
          true,
          "Successfully executed the code with generated test cases",
          results
        )
      );
    } else {
      // Use provided test cases
      const results = await runCodeWithTestCases(
        code,
        testCases,
        timeLimit,
        memoryLimit
      );

      res.json(
        new ApiResponse(200, true, "Successfully executed the code", results)
      );
    }
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      `Failed to execute code: ${error instanceof Error ? error.message : "Unknown error"}`,
      500
    );
  }
});

export { runCode, geminiFormatAndRunCode };
