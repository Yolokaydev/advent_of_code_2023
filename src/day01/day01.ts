import { readFileLines, getAllDigits } from "./utils.js";

const filePath: string = "./src/day01/input.txt";
let lines: string[] = [];
let digits: number[][] = [];

//Read in all lines
try {
  lines = await readFileLines(filePath);
} catch (error) {
  console.error(error);
}

//Get all digits
lines.forEach((line) => {
  const lineDigits = getAllDigits(line);

  digits.push(lineDigits);
});

console.log(digits.length);
