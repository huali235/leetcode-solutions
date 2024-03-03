/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

function containsDuplicateII(nums, k) {
  let hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashmap.has(nums[i]) && i - hashmap.get(nums[i]) <= k) {
      return true;
    } else {
      hashmap.set(nums[i], i);
    }
  }
  return false;
}
