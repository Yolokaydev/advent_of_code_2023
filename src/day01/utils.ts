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
