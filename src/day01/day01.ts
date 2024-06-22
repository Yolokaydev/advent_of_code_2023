import { readFileLines } from "./utils.js";

const filePath: string = './src/day01/input.txt';
let lines: string[] = [];

try {
    lines = await readFileLines(filePath);
} catch (error) {
    console.error(error);
}

console.log(lines);



