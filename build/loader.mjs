import yaml from 'yaml';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export async function load(url, context, nextLoad) {
  if (url.endsWith('.yml') || url.endsWith('.yaml')) {
    try {
      const filePath = path.resolve(fileURLToPath(url)); // нормализуем путь
      const source = readFileSync(filePath, 'utf8'); // читаем файл

      return {
        format: 'json',
        shortCircuit: true,
        source: JSON.stringify(yaml.parse(source)),
        парсим,
      };
    } catch (err) {
      console.error(err);
    }
  }

  return nextLoad(url, context);
}
