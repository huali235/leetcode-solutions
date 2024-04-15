/**
 * @param {number []} nums
 * @return {number}
 */

// TOPICS: ARRAY. TWO POINTER

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let r = 0;
  for (let l = 1; l < nums.length; l++) {
    if (nums[l] != nums[r]) {
      r++;
      nums[r] = nums[l];
    }
  }
  return nums;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
