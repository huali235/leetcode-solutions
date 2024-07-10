/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  /*
  // First way of solving
  let fizzArr = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzArr.push("Fizz");
    } else if (i % 5 === 0) {
      fizzArr.push("Buzz");
    } else {
      fizzArr.push(`${i}`);
    }
  }
  return fizzArr;
  */
  // More concise way of solving

  let fizzArr = [];
  for (let i = 0; i <= n; i++) {
    fizzArr.push(
      (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i,
    );
  }
  return fizzArr;
}
