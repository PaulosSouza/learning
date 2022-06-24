import fs from "fs";
import path from "path";

interface Folders {
  [key: string]: string;
}

const challengesFolder: Folders = {
  recursive: path.join(__dirname, "..", "challenges", "recursive"),
};

for (const folder in challengesFolder) {
  const folderPath = challengesFolder[folder];

  const files = fs.readdirSync(folderPath, "utf-8");

  files.forEach((fileName) => {
    const filePath = path.join(folderPath, fileName);

    require(filePath);
  });
}
