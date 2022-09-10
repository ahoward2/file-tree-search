#!/usr/bin/env ts-node
import { findDirectory } from "./search";

const main = (): void => {
  const searchResult = findDirectory(process.argv[2] ?? "world");
  if (searchResult.length > 0) {
    console.log("FOUND DIRECTORY!");
  } else {
    console.log("DIRECTORY NOT FOUND!");
  }
  console.log("SEARCH RESULT: ", searchResult);
};

main();
