const permutingString = require("../src/challenge-1").permutingString;

describe("Permutations String", () => {
  const testExpectation = [
    { input: "a", expected: ["a"] },
    { input: "ab", expected: ["ab", "ba"] },
    { input: "abc", expected: ["abc", "acb", "bac", "bca", "cab", "cba"] },
    {
      input: "aabb",
      expected: ["aabb", "abab", "abba", "baab", "baba", "bbaa"],
    },
  ];
  testExpectation.forEach(({ input, expected }) => {
    test(`'${input}' should return ${expected}`, () => {
      const result = permutingString(input);
      expect(result.sort()).toEqual(expected.sort());
    });
  });
});
