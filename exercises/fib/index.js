// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(num) {
//   if (num <= 1) return 1;

//   return fib(num - 1) + fib(num - 2);
// }


const fib = (num) => {
  let series = [1,1]
  for(let i =2; i<=num-1; i++){
    series[i] = series[i-1] + series[i-2]
  }

  return series[num-1]
} 


// function fib(n, memo) {
//   memo = memo || {};
//   if (memo[n]) return memo[n];
//   if (num <= 1) return 1;
//   return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
// }


module.exports = fib