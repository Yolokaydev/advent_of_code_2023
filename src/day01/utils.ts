import { promises as fs } from "fs";

export async function readFileLines(filePath: string): Promise<string[]> {
  try {
    const data: string = await fs.readFile(filePath, "utf8");
    // const lines: string[] = data.split(/\r?\n/);
    const lines = data.split("\n").map((line) => line.replace("\r", ""));
    return lines;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function getAllNumbers(line: String): [String] {
  return [""];
}
export function getNumber(line: String): Number {
  const numberMap: { [key: string]: number } = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  // Replace spelled out numbers with their digit equivalents
  for (const [word, digit] of Object.entries(numberMap)) {
    const regex = new RegExp(word, "gi");
    line = line.replace(regex, digit.toString());
  }

  // Extract all numbers and sort them in descending order
  const numbers = line
    .match(/\d+/g)
    ?.map(Number)
    .sort((a, b) => b - a);

  // Join sorted numbers into a single number
  return numbers ? Number(numbers.join("")) : 0;
}
export function getAllDigits(line: string) {
  const digitStrings = line.match(/\d/g);

  return digitStrings ? digitStrings.map(Number) : [];
}

export function addFirstAndLastDigit(numbers: number[]) {
  if (numbers && numbers.length > 0) {
    return numbers[0] * 10 + numbers[numbers.length - 1];
  }
  return 0;
}
