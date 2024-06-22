import { readFileLines, getAllDigits, addFirstAndLastDigit } from "./utils.js";

const filePath: string = "./src/day01/input.txt";
let lines: string[] = [];
let digits: number[][] = [];
let sum: number = 0;

//Read in all lines
try {
  lines = await readFileLines(filePath);
} catch (error) {
  console.error(error);
}

//Get all digits in lines
lines.forEach((line) => {
  const lineDigits = getAllDigits(line);

  digits.push(lineDigits);
});

//Get the first and last digit, and add them up
digits.forEach((element) => {
  sum += addFirstAndLastDigit(element);
});

console.log(sum);
