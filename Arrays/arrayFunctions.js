// Lookup => O(1)
// push to the end of array => O(1)
// pop from the end of array => O(1)
// insert to specific index => O(n)
// delete from specific index => O(n)

let arr = [1,2,3,4,5,6,7,8,9,10];
let arr1 = [1,2,3,4,5,6,7,8,9,10];

arr.push(11); // O(1)
arr.pop(); // O(1)
arr.unshift(0); // O(n)
arr.shift(); // O(n)
arr.splice(0,1,"First"); // O(n)
console.log(arr);
console.log(arr.indexOf(1));
console.log(arr.lastIndexOf(1));
console.log(arr.includes(1));


let separator = arr.join('-');
console.log(separator);

let arr2 = arr.concat(arr1);
console.log(arr2);

let str = "I Love U";
let myArr= str.split('');
console.log(myArr);