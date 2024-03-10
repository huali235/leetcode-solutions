/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function intersect(nums1, nums2) {
  let answerArray = [];

  const set1 = createHashset(nums1);
  const set2 = createHashset(nums2);

  for (let num of set1) {
    if (set2.has(num)) {
      answerArray.push(num);
    }
  }
  return answerArray;
}

function createHashset(array) {
  let hashSet = new Set();

  for (let num of array) {
    hashSet.add(num);
  }
  return hashSet;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 2, 1], [2, 2]));
