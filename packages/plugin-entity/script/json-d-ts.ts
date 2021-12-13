import path from "path";
import { readdir, readFile, writeFile } from "fs/promises";

const resolveRoot = (...subPath: string[]): string =>
  path.join(__dirname, "..", ...subPath);

async function* getFiles(dir: string): AsyncGenerator<string, void, void> {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else if (res?.endsWith(".schema.json")) {
      yield res;
    }
  }
}

const main = async (): Promise<void> => {
  for await (const file of getFiles(resolveRoot("src"))) {
    let content = await readFile(file, { encoding: "utf8" });
    content = content.trim();
    content = `const data = ${content} as const;\nexport = data;`;
    await writeFile(file + ".d.ts", content);
  }
};

main();
