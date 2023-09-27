const countOddInt = require("./challenge-2").countOddInt;

describe("Count odd number", () => {
  const testExpectation = [
    { input: [7], expected: 7 },
    { input: [0], expected: 0 },
    { input: [1, 1, 2], expected: 2 },
    { input: [0, 1, 0, 1, 0], expected: 0 },
    { input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], expected: 4 },
    { input: [1, 1, 1, 2, 2, 2], expected: 1 },
    { input: [], expected: undefined },
  ];
  testExpectation.forEach(({ input, expected }) => {
    test(`${
      input.length > 0 ? `[${input}]` : "Empty"
    } should return ${expected}`, () => {
      const result = countOddInt(input);
      expect(result).toEqual(expected);
    });
  });
});
