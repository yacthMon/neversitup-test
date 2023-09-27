const countSmileys = function (input) {
  return input.join(",").match(/((:|;)(-|~|)(\)|D))/g)?.length || 0;
};

module.exports = { countSmileys };
