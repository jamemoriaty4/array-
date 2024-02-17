const inputArray = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let i = 0; i < inputArray.length; i++) {
  console.log(`"row ${i}"`);
  for (let j = 0; j < inputArray[i].length; j++) {
    console.log(` ${inputArray[i][j]}`);
  }
  console.log(`-----`);
}
