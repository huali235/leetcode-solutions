/**
 * @param {number} n
 * @return {boolean}
 */

function happyNumber(n) {
  let seen = new Set();

  function helper(n) {
    if (n == 1) {
      return true;
    } else if (seen.has(n)) {
      return false;
    }
    seen.add(n);

    let sum = 0;
    while (n > 0) {
      digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return helper(sum);
  }
  return helper(n);
}

console.log(happyNumber(19)); // true
console.log(happyNumber(2)); // false
console.log(happyNumber(10)); // true
