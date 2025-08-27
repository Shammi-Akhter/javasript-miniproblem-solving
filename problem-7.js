// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
