const permutingString = (input) => {
  const result = new Set();
  let inputAsArray = input.split("");

  for (let i = 0; i < inputAsArray.length; i++) {
    const temp = inputAsArray[i];
    inputAsArray[i] = inputAsArray[0];
    inputAsArray[0] = temp;

    result.add(inputAsArray.join(""));
    for (let j = 0; j < inputAsArray.length; j++) {
      inputAsArray.push(inputAsArray.shift());
      result.add(inputAsArray.join(""));
    }
    inputAsArray = input.split("");
  }
  return Array.from(result);
};

const test = ["a", "ab", "abc", "aabb"];
test.forEach((input) => {
  console.log(`Input : ${input}`);
  console.log(`Result: `, permutingString(input));
});
