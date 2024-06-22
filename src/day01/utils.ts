import { promises as fs } from 'fs';

export async function readFileLines(filePath: string): Promise<string[]> {
    try {
      const data: string = await fs.readFile(filePath, 'utf8');
      // const lines: string[] = data.split(/\r?\n/);
      const lines = data.split('\n').map(line => line.replace('\r', ''));
      return lines;
    } catch (err) {
      console.error(err);
      return [];
    }
  }