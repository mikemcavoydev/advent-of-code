const fs = require("fs");
const readline = require("readline");

async function parseInput() {
  const rl = readline.createInterface({
    input: fs.createReadStream("./../input.txt", { encoding: "utf8" }),
  });

  const left = [];
  const right = [];

  for await (const line of rl) {
    const arr = line.split(" ").filter(Boolean);

    left.push(arr[0]);
    right.push(arr[1]);
  }

  return { left, right };
}

parseInput();

(async function () {
  const { left, right } = await parseInput();
})();
