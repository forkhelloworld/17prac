const arr1 = [1,"2",3.1,-4,5]

for (const element of arr1) {
    console.log(element);
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let arrayNumbers = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (const number of arrayNumbers) {
  if (isPrime(number)) {
    console.log(number);
  }
}

const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6];
const arr4 = arr2.concat(arr3);

let arr5 = [6, 5, 4];
arr5.reverse();

let arr6 = [1, 2, 3];
arr6.push(4, 5, 6);

let arr7 = [7, 8, 9];
arr7.unshift(1, 2, 3);

let arr8 = ["aaa", "bbb", "ccc"];
console.log("first element :>> ", arr8.shift());

let arr9 = ["aaa", "bbb", "ccc"];
console.log("last element :>> ", arr9.pop());

let arr10 = [9, 10, 11, 12, 13];
let arr11 = arr10.slice(1, 5);

let arr12 = [1, 2, 3, 4, 5];
let arr13 = arr12.splice(1, 2);

let arr14 = [1, 2, 3, 4, 5];
let arr15 = arr14.splice(2);

let arr16 = [1, 2, 3, 4, 5];
arr16.splice(1, 0, "w", "trtr");
arr16.splice(6, 0, "vvv", "a", "hello");

function countVowels(str, vowelsArray) {
  let count = 0;
  str = str.toLowerCase();

  for (let char of str) {
    if (vowelsArray.includes(char)) {
      count++;
    }
  }

  return count;
}

let vowelsArray = ["a", "e", "i", "o", "u", "y"];

let result = countVowels("lorem ipsum dolor sit amet", vowelsArray);
console.log(result);
