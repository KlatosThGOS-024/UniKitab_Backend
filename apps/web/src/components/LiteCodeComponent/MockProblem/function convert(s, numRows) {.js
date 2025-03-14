function convert(s, numRows) {
  // Edge case: if numRows is 1, just return the input string as there's no zigzagging
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  // Create an array to hold strings for each row
  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  // Loop through the string and append characters to appropriate rows
  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i];

    // Change direction when we reach the first or last row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Move up or down to the next row
    currentRow += goingDown ? 1 : -1;
  }

  // Concatenate all rows to form the final string
  return rows.join("");
}
const handlerZigZag = (fn) => {
  try {
    const inputs = [
      { s: "PAYPALISHIRING", numRows: 3 },
      { s: "PAYPALISHIRING", numRows: 4 },
      { s: "A", numRows: 1 },
    ];
    const answers = ["PAHNAPLSIIGYIR", "PINALSIGYAHRPI", "A"];

    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i].s, inputs[i].numRows);
      if (result !== answers[i]) {
        throw new Error(
          `Error at index ${i}: expected ${answers[i]}, got ${result}`
        );
      }
    }
    return true;
  } catch (error) {
    console.log("convert handler function error");
    throw new Error(error);
  }
};
console.log(handlerZigZag(convert));
