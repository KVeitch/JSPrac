// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//.padStart(2, '0')

function steps(n) {
  let hashtags = ''

  for (let i = 1; i<=n; i++){
    hashtags = hashtags+'#'
    console.log(hashtags.padEnd(n,' '))
  }
}

module.exports = steps;
