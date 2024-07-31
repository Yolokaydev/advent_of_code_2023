import { readFileLines, getAllDigits, addFirstAndLastDigit } from "./utils.js";

const filePath: string = "./src/day01/input.txt";
let lines: string[] = [];
// let digits: number[][] = [];
// let sum: number = 0;

//Read in all lines
try {
  lines = await readFileLines(filePath);
} catch (error) {
  console.error(error);
}

console.log(lines.length);
