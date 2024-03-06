/**
 * @param {number []} nums
 * @return {number}
 */

function missingNumber(nums) {
  // Implementing Gauss' formula for space and runtime efficiency
  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  let actualSum = 0;
  for (let num of nums) {
    actualSum += num;
  }
  return expectedSum - actualSum;

  // My first way of solving the problem
  /*
  let hashmap = new Map();
  for (let [i, num] of nums.entries()) {
    hashmap.set(num, i);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!hashmap.has(i)) {
      return i;
    }
  }
  return hashmap;
  */
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
