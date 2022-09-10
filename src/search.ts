import { readdirSync, statSync } from "fs";
import { join } from "path";

/**
 * Given a file tree of any size and a directory name to search for, return the file path of the first
 * occurence of the given directory name. Also, should start from process.cwd.
 */
export const findDirectory = (
  searchName: string,
  startDirectory = [process.cwd()]
): string => {
  const scanStartDir = readdirSync(join(...startDirectory));
  const filteredScan = scanStartDir.filter((dir) =>
    isDir(join(...[...startDirectory, dir]))
  );
  if (filteredScan.includes(searchName)) {
    return join(...[...startDirectory, searchName]);
  } else if (filteredScan.length === 0) {
    return "";
  } else {
    let subScanFound = "";
    filteredScan.every((dir) => {
      const result = findDirectory(searchName, [...startDirectory, dir]);
      if (result.length > 0) {
        subScanFound = result;
        return false;
      }
      return true;
    });
    return subScanFound;
  }
};

const isDir = (path: string): boolean => {
  try {
    return statSync(path).isDirectory();
  } catch (e) {
    return false;
  }
};
