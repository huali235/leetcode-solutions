/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
  let hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashmap.has(nums[i])) {
      return true;
    } else {
      hashmap.set(nums[i], i);
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
