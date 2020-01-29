// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str)=> {
  let max = 0
  let maxChar = ''
  let charMap = [...str].reduce((acc,char)=>{
    if(!acc[char]){
      acc[char] = 0
    }
    acc[char]++
    return acc
  },{})

  Object.keys(charMap).forEach(char =>{
    if(charMap[char]> max){
      max = charMap[char]
      maxChar = char
    }
  })
return maxChar
}

module.exports = maxChar;
