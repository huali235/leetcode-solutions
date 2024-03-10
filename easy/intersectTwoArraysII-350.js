/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function intersect(nums1, nums2) {
  let i = 0,
    j = 0;

  let result = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
}
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 2, 1], [2, 2]));
