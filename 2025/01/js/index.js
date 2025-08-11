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

  const sortFn = (a, b) => a - b;

  return { left: left.sort(sortFn), right: right.sort(sortFn) };
}

(async function () {
  const { left, right } = await parseInput();

  let distanceSum = 0;

  for (let i = 0; i < left.length; i++) {
    const l = left[i];
    const r = right[i];

    if (l == r) {
      continue;
    }

    if (l > r) {
      distanceSum += l - r;
    } else {
      distanceSum += r - l;
    }
  }

  console.log(distanceSum);
})();
