const input = [1, 2, 5, 4, 10, 21, 11, 7];
// 	Output: [1, 2, 4, 5, 7, 10, 11, 21];

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] > input[j]) {
      let temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
  }
}
console.log(input);

// // C2
// console.log(input.sort((a, b) => a - b));
