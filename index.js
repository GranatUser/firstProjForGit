"use strict";
/*function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
 let thirdArr = firstArray.concat(secondArray);
if( thirdArr.length>maxLength){
  let difference = thirdArr.length-maxLength;
  thirdArr = thirdArr.slice(0,maxLength);
}
return thirdArr;

  // Change code above this line
}
const firstArray1 = [1,2,3];
const secondArray2 = [10,11,12];

for(const i of makeArray(firstArray1,secondArray2,5)){
  console.log(i);
}*/
/*function findLongestWord(string) {
  // Change code below this line
 const stringArr = string.split(" ");
  let longestWord = stringArr[0];
  for (let k = 1;k<stringArr.length;k++){
    if(stringArr[k].length>longestWord.length){
      longestWord = stringArr[k];
    }
  }
return  longestWord;

  // Change code above this line
}

  console.log( findLongestWord('The quick brown fox jumped over the lazy dog'));
*/
/*const numbers = [];
let min = 1;
let max = 2;
if( min>=max){
  numbers.push(min);
  numbers.push(max);
}
else{
 numbers.push(max);
 numbers.push(min);
}
console.log(numbers[0]);
console.log(numbers[1]);*/

/*function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  numbers.push(min);
  
   for( const k= max-min,i=min+1;k>0;k--,i++){
     numbers.push(i);
   }
  // Change code above this line
  return numbers;
}

for(const i of createArrayOfNumbers(1,5)){
  console.log(i);
}*/
/*b();
function b (){
  console.log("aaaa");
}
function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();*/
/*function getCommonElements(array1, array2) {
  // Change code below this line
 let array3 = [];
 for(let k = 0;k<array1.length;k++){
   if(array2.includes(array1[k])){
     array3.push(array1[k]);
   }
 }

return array3;
 // Change code above this line
}
const array1 = [24, 12, 27, 3];
const array2 = [12, 8, 3, 36, 27];
for(const i of getCommonElements(array1,array2)){
  console.log(i);
}*/