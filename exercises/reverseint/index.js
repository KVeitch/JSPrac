// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
  let reversed = '';
  let str = n.toString(10).split('');

  for (let character of str) {
    reversed = character + reversed;
  }
  if (n < 0) {
    reversed = '-' + reversed.slice(0, -1);
  }

  return parseInt(reversed);
};

module.exports = reverseInt;
