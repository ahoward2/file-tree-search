#!/usr/bin/env ts-node
import { findDirectory } from "./search";

const main = (): void => {
  const searchResult = findDirectory(process.argv[2] ?? "world");
  console.log("FINAL RESULT: ", searchResult);
};

main();
