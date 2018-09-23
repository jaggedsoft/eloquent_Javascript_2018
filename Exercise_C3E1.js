/*

Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

*/

// Your code here.

min = (x, y) => Math.min(x, y);

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10