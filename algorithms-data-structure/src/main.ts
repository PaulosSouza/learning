import fs, { Dirent } from "fs";
import path from "path";

const foldersToIgnore: string[] = [".vscode", "src", "node_modules"];
const filesAccepted = ".ts";

const rootPath = path.join(__dirname, "..");
const rootFilesOrDirs = fs.readdirSync(rootPath, {
  encoding: "utf-8",
  withFileTypes: true,
});

function isPartOfIgnoredFolders(dir: Dirent): boolean {
  return foldersToIgnore.includes(dir.name);
}

function readAllFilesFromDir(dirPath: string): void {
  const dirReaded = fs.readdirSync(dirPath, {
    encoding: "utf-8",
    withFileTypes: true,
  });

  for (const resource of dirReaded) {
    const resourceFullPath = path.join(dirPath, resource.name);

    if (resource.isDirectory()) {
      readAllFilesFromDir(resourceFullPath);
      continue;
    }

    const isTypescriptFile = resourceFullPath.includes(filesAccepted);

    if (!isTypescriptFile) {
      continue;
    }

    require(resourceFullPath);
  }
}

for (const fileOrDir of rootFilesOrDirs) {
  if (!fileOrDir.isDirectory()) continue;

  const shouldIgnore = isPartOfIgnoredFolders(fileOrDir);
  if (shouldIgnore) continue;

  const fullPath = path.join(__dirname, "..", fileOrDir.name);
  readAllFilesFromDir(fullPath);
}
