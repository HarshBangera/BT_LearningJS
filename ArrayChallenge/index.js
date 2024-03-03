//Challenge 1
// const array = [1,2,3,4,5];

// array.unshift(0);
// array.push(6);
// array.reverse();

// console.log(array);

//Challenge 2
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10];

//arr2.shift();
arr2.splice(0, 1);

const newArr = [...arr1, ...arr2];

console.log(newArr);