const countSmileys = require("./challenge-3").countSmileys;

describe("Count Smile", () => {
  const testExpectation = [
    { input: [":)", ";(", ";}", ":-D"], expected: 2 },
    { input: [";D", ":-(", ":-)", ";~)"], expected: 3 },
    { input: [";]", ":[", ";*", ":$", ";-D"], expected: 1 },
    { input: [":x", ":|", "xD", "@_@", "อิ_อิ"], expected: 0 },
    { input: [], expected: 0 },
  ];
  testExpectation.forEach(({ input, expected }) => {
    test(`[${input}] should return ${expected}`, () => {
      const result = countSmileys(input);
      expect(result).toEqual(expected);
    });
  });
});
