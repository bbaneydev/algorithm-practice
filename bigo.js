// Example

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n. 

// regular
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total
// }

// big o
// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }

// Space complexity

// - Most primitives(bool, numbers, undefined, null) are constant space
// - Strings require O(n) space (where n is the string length)
// - Reference types are generally O(n) where n is the length (for arrays) or the number of keys (for objects)