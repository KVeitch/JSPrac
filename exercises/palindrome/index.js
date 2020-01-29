// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let reversed = [...str].reverse().join('')
//   return str===reversed
// }

function palindrome(str){
  return[...str].every((char,i) => char === str[str.length-1-i])
}


const palindrom =(str) =>{
  let result = true
  for (let i = 0; (str.length-1)/2; i++) {
    if (str[i] !== str[str.length -1 -i]){
      result = false
    }
  }
  return result
}



module.exports = palindrome;
