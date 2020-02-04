// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowelsMap = ['a','e','i','o','u'];
  let vowelCount = 0
  for (let letter of str) {
    if (vowelsMap.includes(letter.toLowerCase())){
      vowelCount ++
    }
  }
  return vowelCount
}


module.exports = vowels;
