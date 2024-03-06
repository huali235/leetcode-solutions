/**
 * @param {string} s
 * @return {number}
 */

function firstUniqueChar(s) {
  let hashmap = new Map();
  let duplicates = new Set();
  const stringArray = [...s];

  for ([i, string] of stringArray.entries()) {
    if (duplicates.has(string)) {
      continue;
    } else if (hashmap.has(string)) {
      hashmap.delete(string);
      duplicates.add(string);
    } else {
      hashmap.set(string, i);
    }
  }
  if (hashmap.size === 0) {
    return -1;
  }
  return hashmap.values().next().value;
}

console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabb"));
