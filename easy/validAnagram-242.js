/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }
  const firstHashmap = createHashmap(s);
  const secondHashmap = createHashmap(t);

  for (let [key, val] of firstHashmap) {
    if (!secondHashmap.has(key) || secondHashmap.get(key) !== val) {
      return false;
    }
  }
  return true;
}

function createHashmap(str) {
  let hashmap = new Map();
  const array = [...str];
  for (let i = 0; i < array.length; i++) {
    if (hashmap.has(array[i])) {
      let counter = hashmap.get(array[i]);
      hashmap.set(array[i], counter + 1);
    } else {
      hashmap.set(array[i], 1);
    }
  }
  return hashmap;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));
