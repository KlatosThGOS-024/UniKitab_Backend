const getAIresponse = async (message: string) => {
  try {
    const url = `http://localhost:8000/api/v1/ai/get-answer`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        getQuestion: message,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAIresponse2 = async (message: string) => {
  try {
    const url = `http://localhost:8000/api/v1/ai/generate-Qarray
`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        problemDescriptions: message,
      }),
    });

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// console.log(
//   getAIresponse2(`Questions by Love Babbar:
// 	Youtube Channel: https: //www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw

// Topic:	Problem: 	Done [yes or no
//     ]
// 		<->
// Array	Reverse the array	<->
// Array	Find the maximum and minimum element in an array	<->
// Array	"Find the ""Kth"" max and min element of an array "	<->
// Array	Given an array which consists of only 0,
//     1 and 2. Sort the array without using any sorting algo	<->
// Array	Move all the negative elements to one side of the array `)
// );
const array = [
  {
    category: "Array",
    questionTitle: "Reverse the array",
    difficulty: "Easy",
  },
  {
    category: "Array",
    questionTitle: "Find the maximum and minimum element in an array",
    difficulty: "Easy",
  },
  {
    category: "Array",
    questionTitle: "Find the Kth max and min element of an array",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle:
      "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Move all the negative elements to one side of the array",
    difficulty: "Easy",
  },
  {
    category: "Array",
    questionTitle: "Find the Union and Intersection of the two sorted arrays",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Write a program to cyclically rotate an array by one",
    difficulty: "Easy",
  },
  {
    category: "Array",
    questionTitle: "find Largest sum contiguous Subarray",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Minimise the maximum difference between heights",
    difficulty: "Hard",
  },
  {
    category: "Array",
    questionTitle: "Minimum no. of Jumps to reach end of an array",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "find duplicate in an array of N+1 Integers",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Merge 2 sorted arrays without using Extra space",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Kadane's Algo",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Merge Intervals",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Next Permutation",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Count Inversion",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Best time to buy and Sell stock",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle:
      "find all pairs on integer array whose sum is equal to given number",
    difficulty: "Easy",
  },
  {
    category: "Array",
    questionTitle: "find common elements In 3 sorted arrays",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle:
      "Rearrange the array in alternating positive and negative items with O(1) extra space",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Find if there is any subarray with sum equal to 0",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Find factorial of a large number",
    difficulty: "Hard",
  },
  {
    category: "Array",
    questionTitle: "find maximum product subarray",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Find longest coinsecutive subsequence",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle:
      "Given an array of size n and a number k, fin all elements that appear more than n/k times",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Maximum profit by buying and selling a share atmost twice",
    difficulty: "Hard",
  },
  {
    category: "Array",
    questionTitle: "Find whether an array is a subset of another array",
    difficulty: "Easy",
  },
  {
    category: "Array",
    questionTitle: "Find the triplet that sum to a given value",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Trapping Rain water problem",
    difficulty: "Hard",
  },
  {
    category: "Array",
    questionTitle: "Chocolate Distribution problem",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Smallest Subarray with sum greater than a given value",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle: "Three way partitioning of an array around a given value",
    difficulty: "Medium",
  },
  {
    category: "Array",
    questionTitle:
      "Minimum swaps required bring elements less equal K together",
    difficulty: "Hard",
  },
  {
    category: "Array",
    questionTitle:
      "Minimum no. of operations required to make an array palindrome",
    difficulty: "Hard",
  },
  {
    category: "Array",
    questionTitle: "Median of 2 sorted arrays of equal size",
    difficulty: "Hard",
  },
  {
    category: "Array",
    questionTitle: "Median of 2 sorted arrays of different size",
    difficulty: "Hard",
  },
  {
    category: "Matrix",
    questionTitle: "Spiral traversal on a Matrix",
    difficulty: "Medium",
  },
  {
    category: "Matrix",
    questionTitle: "Search an element in a matriix",
    difficulty: "Easy",
  },
  {
    category: "Matrix",
    questionTitle: "Find median in a row wise sorted matrix",
    difficulty: "Hard",
  },
  {
    category: "Matrix",
    questionTitle: "Find row with maximum no. of 1's",
    difficulty: "Medium",
  },
  {
    category: "Matrix",
    questionTitle:
      "Print elements in sorted order using row-column wise sorted matrix",
    difficulty: "Medium",
  },
  {
    category: "Matrix",
    questionTitle: "Maximum size rectangle",
    difficulty: "Hard",
  },
  {
    category: "Matrix",
    questionTitle: "Find a specific pair in matrix",
    difficulty: "Medium",
  },
  {
    category: "Matrix",
    questionTitle: "Rotate matrix by 90 degrees",
    difficulty: "Easy",
  },
  {
    category: "Matrix",
    questionTitle: "Kth smallest element in a row-cpumn wise sorted matrix",
    difficulty: "Hard",
  },
  {
    category: "Matrix",
    questionTitle: "Common elements in all rows of a given matrix",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Reverse a String",
    difficulty: "Easy",
  },
  {
    category: "String",
    questionTitle: "Check whether a String is Palindrome or not",
    difficulty: "Easy",
  },
  {
    category: "String",
    questionTitle: "Find Duplicate characters in a string",
    difficulty: "Easy",
  },
  {
    category: "String",
    questionTitle: "Why strings are immutable in Java?",
    difficulty: "Easy",
  },
  {
    category: "String",
    questionTitle:
      "Write a Code to check whether one string is a rotation of another",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Write a Program to check whether a string is a valid shuffle of two strings or not",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Count and Say problem",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Find Longest Recurring Subsequence in String",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Print all Subsequences of a string",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Print all the permutations of the given string",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Split the Binary string into two substring with equal 0’s and 1’s",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Word Wrap Problem",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "EDIT Distance",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Find next greater number with same set of digits",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Balanced Parenthesis problem",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Word break Problem",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Rabin Karp Algo",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "KMP Algo",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Convert a Sentence into its equivalent mobile numeric keypad sequence",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Minimum number of bracket reversals needed to make an expression balanced",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Count All Palindromic Subsequence in a given String",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Count of number of given string in 2D character array",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Search a Word in a 2D Grid of characters",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Boyer Moore Algorithm for Pattern Searching",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Converting Roman Numerals to Decimal",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Longest Common Prefix",
    difficulty: "Easy",
  },
  {
    category: "String",
    questionTitle: "Number of flips to make binary string alternate",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle: "Find the first repeated word in string",
    difficulty: "Easy",
  },
  {
    category: "String",
    questionTitle: "Minimum number of swaps for bracket balancing",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Find the longest common subsequence between two strings",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Program to generate all possible valid IP addresses from given  string",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle:
      "Write a program tofind the smallest window that contains all characters of string itself",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle:
      "Rearrange characters in a string such that no two adjacent are same",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Minimum characters to be added at front to make string palindrome",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Given a sequence of words, print all anagrams together",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Find the smallest window in a string containing all characters of another string",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Recursively remove all adjacent duplicates",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "String matching where one string contains wildcard characters",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle:
      "Function to find Number of customers who could not get a computer",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Transform One String to Another using Minimum Number of Given Operation",
    difficulty: "Hard",
  },
  {
    category: "String",
    questionTitle: "Check if two given strings are isomorphic to each other",
    difficulty: "Medium",
  },
  {
    category: "String",
    questionTitle:
      "Recursively print all sentences that can be formed from list of word lists",
    difficulty: "Hard",
  },
  {
    category: "Searching & Sorting",
    questionTitle:
      "Find first and last positions of an element in a sorted array",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Find a Fixed Point (Value equal to index) in a given array",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Search in a rotated sorted array",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "square root of an integer",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle:
      "Maximum and minimum of an array using minimum number of comparisons",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Optimum location of point to minimize total distance",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Find the repeating and the missing",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "find majority element",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Searching in an array where adjacent differ by at most k",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "find a pair with a given difference",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "find four elements that sum to a given value",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "maximum sum such that no 2 elements are adjacent",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Count triplet with sum smaller than a given value",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "merge 2 sorted arrays",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "print all subarrays with 0 sum",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Product array Puzzle",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Sort array according to count of set bits",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "minimum no. of swaps required to sort the array",
    difficulty: "Hard",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Bishu and Soldiers",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Rasta and Kheshtak",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Kth smallest number again",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Find pivot element in a sorted array",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "K-th Element of Two Sorted Arrays",
    difficulty: "Hard",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Aggressive cows",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Book Allocation Problem",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "EKOSPOJ",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Job Scheduling Algo",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Missing Number in AP",
    difficulty: "Easy",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Smallest number with atleastn trailing zeroes infactorial",
    difficulty: "Hard",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Painters Partition Problem",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "ROTI-Prata SPOJ",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "DoubleHelix SPOJ",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Subset Sums",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Findthe inversion count",
    difficulty: "Medium",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Implement Merge-sort in-place",
    difficulty: "Hard",
  },
  {
    category: "Searching & Sorting",
    questionTitle: "Partitioning and Sorting Arrays with Many Repeated Entries",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle:
      "Write a Program to reverse the Linked List. (Both Iterative and recursive)",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle: "Reverse a Linked List in group of Given Size",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Write a program to Detect loop in a linked list",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle: "Write a program to Delete loop in a linked list",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Find the starting point of the loop",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Remove Duplicates in a sorted Linked List",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle: "Remove Duplicates in a Un-sorted Linked List",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle:
      "Write a Program to Move the last element to Front in a Linked List",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle: "Add “1” to a number represented as a Linked List",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Add two numbers represented by linked lists",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Intersection of two Sorted Linked List",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle: "Intersection Point of two Linked Lists",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Merge Sort For Linked lists",
    difficulty: "Hard",
  },
  {
    category: "LinkedList",
    questionTitle: "Quicksort for Linked Lists",
    difficulty: "Hard",
  },
  {
    category: "LinkedList",
    questionTitle: "Find the middle Element of a linked list",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle: "Check if a linked list is a circular linked list",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle: "Split a Circular linked list into two halves",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle:
      "Write a Program to check whether the Singly Linked list is a palindrome or not",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Deletion from a Circular Linked List",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Reverse a Doubly Linked list",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Find pairs with a given sum in a DLL",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle:
      "Count triplets in a sorted DLL whose sum is equal to given value “X”",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Sort a “k”sorted Doubly Linked list",
    difficulty: "Hard",
  },
  {
    category: "LinkedList",
    questionTitle: "Rotate DoublyLinked list by N nodes",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Rotate a Doubly Linked list in group of Given Size",
    difficulty: "Hard",
  },
  {
    category: "LinkedList",
    questionTitle: "Can we reverse a linked list in less than O(n) ?",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle:
      "Why Quicksort is preferred for Arrays and Merge Sort for LinkedLists ?",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle: "Flatten a Linked List",
    difficulty: "Hard",
  },
  {
    category: "LinkedList",
    questionTitle: "Sort a LL of 0's, 1's and 2's",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Clone a linked list with next and random pointer",
    difficulty: "Hard",
  },
  {
    category: "LinkedList",
    questionTitle: "Merge K sorted Linked list",
    difficulty: "Hard",
  },
  {
    category: "LinkedList",
    questionTitle: "Multiply 2 no. represented by LL",
    difficulty: "Hard",
  },
  {
    category: "LinkedList",
    questionTitle: "Delete nodes which have a greater value on right side",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Segregate even and odd nodes in a Linked List",
    difficulty: "Medium",
  },
  {
    category: "LinkedList",
    questionTitle: "Program for n’th node from the end of a Linked List",
    difficulty: "Easy",
  },
  {
    category: "LinkedList",
    questionTitle:
      "Find the first non-repeating character from a stream of characters",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "level order traversal",
    difficulty: "Easy",
  },
  {
    category: "Binary Trees",
    questionTitle: "Reverse Level Order traversal",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Height of a tree",
    difficulty: "Easy",
  },
  {
    category: "Binary Trees",
    questionTitle: "Diameter of a tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Mirror of a tree",
    difficulty: "Easy",
  },
  {
    category: "Binary Trees",
    questionTitle:
      "Inorder Traversal of a tree both using recursion and Iteration",
    difficulty: "Easy",
  },
  {
    category: "Binary Trees",
    questionTitle:
      "Preorder Traversal of a tree both using recursion and Iteration",
    difficulty: "Easy",
  },
  {
    category: "Binary Trees",
    questionTitle:
      "Postorder Traversal of a tree both using recursion and Iteration",
    difficulty: "Easy",
  },
  {
    category: "Binary Trees",
    questionTitle: "Left View of a tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Right View of Tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Top View of a tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Bottom View of a tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Zig-Zag traversal of a binary tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Check if a tree is balanced or not",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Diagnol Traversal of a Binary tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Boundary traversal of a Binary tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle:
      "Construct Binary Tree from String with Bracket Representation",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Convert Binary tree into Doubly Linked List",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Convert Binary tree into Sum tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Construct Binary tree from Inorder and preorder traversal",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle:
      "Find minimum swaps required to convert a Binary tree into BST",
    difficulty: "Hard",
  },
  {
    category: "Binary Trees",
    questionTitle: "Check if Binary tree is Sum tree or not",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Check if all leaf nodes are at same level or not",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle:
      "Check if a Binary Tree contains duplicate subtrees of size 2 or more",
    difficulty: "Hard",
  },
  {
    category: "Binary Trees",
    questionTitle: "Check if 2 trees are mirror or not",
    difficulty: "Easy",
  },
  {
    category: "Binary Trees",
    questionTitle: "Sum of Nodes on the Longest path from root to leaf node",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Check if given graph is tree or not",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Find Largest subtree sum in a tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle:
      "Maximum Sum of nodes in Binary tree such that no two are adjacent",
    difficulty: "Hard",
  },
  {
    category: "Binary Trees",
    questionTitle: "Print all K Sum paths in a Binary tree",
    difficulty: "Hard",
  },
  {
    category: "Binary Trees",
    questionTitle: "Find LCA in a Binary tree",
    difficulty: "Medium",
  },
  {
    category: "Binary Trees",
    questionTitle: "Find distance between 2 nodes in a Binary tree",
    difficulty: "Hard",
  },
  {
    category: "Binary Trees",
    questionTitle: "Kth Ancestor of node in a Binary tree",
    difficulty: "Hard",
  },
  {
    category: "Binary Trees",
    questionTitle: "Find all Duplicate subtrees in a Binary tree",
    difficulty: "Hard",
  },
  {
    category: "Binary Trees",
    questionTitle: "Tree Isomorphism Problem",
    difficulty: "Hard",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Fina a value in a BST",
    difficulty: "Easy",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Deletion of a node in a BST",
    difficulty: "Medium",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Find min and max value in a BST",
    difficulty: "Easy",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Find inorder successor and inorder predecessor in a BST",
    difficulty: "Medium",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Check if a tree is a BST or not",
    difficulty: "Medium",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Populate Inorder successor of all nodes",
    difficulty: "Medium",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Find LCA  of 2 nodes in a BST",
    difficulty: "Medium",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Construct BST from preorder traversal",
    difficulty: "Hard",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Convert Binary tree into BST",
    difficulty: "Hard",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Convert a normal BST into a Balanced BST",
    difficulty: "Hard",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Merge two BST",
    difficulty: "Hard",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Find Kth largest element in a BST",
    difficulty: "Medium",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Find Kth smallest element in a BST",
    difficulty: "Medium",
  },
  {
    category: "Binary Search Trees",
    questionTitle: "Count pairs from 2 BST whose sum is equal to",
  },
];
var count = 0;
array.map((item: any, index: any) => count++);
console.log(count);
