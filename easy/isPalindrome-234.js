// class ListNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// // Function to create a linked list from an array
// function createLinkedList(arr) {
//   let dummyNode = new ListNode(0);
//   let current = dummyNode;
//   for (let val of arr) {
//     current.next = new ListNode(val);
//     current = current.next;
//   }
//   return dummyNode.next;
// }
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let arr = [];
  let current = head;

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
let linkedList = createLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(linkedList));

///// My attempt to solve this
/*
function isPalindrome(head) {
  let current = head;
  let prev = null;
  let array1 = [],
    array2 = [];
  while (current !== null) {
    array1.push(current.val);
    current = current.next;
  }
  current = head;
  while (current !== null) {
    const nextNode = current.next;
    array2.unshift(current.val);
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return array1.every((value, index) => value === array2[index]);
}
let linkedList = createLinkedList([1, 2]);
console.log(isPalindrome(linkedList));
*/
