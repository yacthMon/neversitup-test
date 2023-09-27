const countOddInt = function (input) {
  const count = {};
  input.forEach((number) => {
    count[number] = (count[number] ?? 0) + 1;
  });
  const keys = Object.keys(count);
  for (let i = 0; i < keys.length; i++) {
    const number = keys[i];
    if (count[number] % 2 > 0) {
      return parseInt(number);
    }
  }
  return undefined;
};

module.exports = { countOddInt };
