// Some others methods for array

// ********* forEach() ***************

// 1) forEach () - Executes a function once for each array element.
// It takes function as a paramter.

// Syntax : - array.forEach(function(currentValue, index, array{}));

// Example : Get index of all fruits along with the name.

// let fruits:string[] = ["Mango","Banana","Grapes","Apple","Kiwi"];

// console.log("Printing fruits along with the index using forEach method");

// fruits.forEach(function(element, index)
// {
//     console.log(index , element);
// });

// fruits.forEach((element, index)=>{
//     console.log(index, element);
// })

// fruits.forEach((element, index)=> console.log(index, element));

//Example 2: Convert all the text to the UpperCase

// fruits.forEach((element)=>
// {
//     console.log(element.toUpperCase());
// });

// *************** Map() ****************
// 2) Map() - creates a new array with the result of calling the function on every element of an array.
// It takes function as a parameter.
// Return the same number of elements that we have in original array.

// Syntax : array.map(function(currentValue, index, array){ });

// Example 1: Get square of all the numbers in an array.

// let numbers:number[] = [1,2,3,4,5];

// let squareNum = numbers.map(function(element)
// {
//     return (element * element);
// });
//console.log("Square of Number:", squareNum); //[1, 4, 9, 16, 25]
// -----------OR -------------------

// let squareNum = numbers.map((element)=>(element*element)); // If you have single statement there will be no need of writing {} and return keyword.

// console.log("Square of Number:", squareNum); //[1, 4, 9, 16, 25]

// Example 2: Double each Number

// let nums:number[] = [1,2,3,4,5];

// let doubleNumber = nums.map((ele)=>(2*ele));
// console.log("Double Number:", doubleNumber); // [2,4,6,8,10]

// ********** Filter *************
// 3) Filter() : - Creates a new array with all the elements that pass/ satisfy the function.
// It takes function as a parameter.
// Returns either same or fever number of elements compared to original array.

// Synatx : array.filter(function(currentValue, index, array){});

// Example 1: Get the obly even number from an array.

// let numbers:number [] = [1,2,3,4,5];
// let evenNumber = numbers.filter((nums)=>nums%2==0);
// console.log("Evens number:", evenNumber);

// Example 2: Get the only numbers greater than 3 from an array.
// let numbers:number[]= [1,2,3,4,5];

// let filterNumber = numbers.filter((ele)
// {
//     return (ele > 3);
// })

// let filterNumber = numbers.filter((nums)=> nums>3);
// console.log("Filter Number:", filterNumber); // [4,5]

// *********** reduce () ************

// 4) reduce () - Applies a function on every element of an array and returns single value.

// Synatx: array.reduce(function(accumulator,currentValue,index,array){});

// Example 1: Get the total (sum) of all the elements in an array.
// let numbers:number[]= [1,2,3,4,5];

// let reduceResult = numbers.reduce((total,ele)=>{
//     return (total+ele);
// }, 0);
// console.log(reduceResult);

//************ some() ***************

// 5) Some() - checks if any element staisfies a condition.

// Return true if at least one element passes the condition , elese false.

// Syntax : arary.some(function(currentValue, index, array){});

// Example 1: check array contains negative values.
// let numbers:number[]= [1,2,3,4,5];
// let hasPositive = numbers.some((element)=>element>0);
// console.log("Does array contains Poistive?", hasPositive); // True

// let hasNegative = numbers.some((element)=>element<0);
// console.log("Does array contains Poistive?", hasNegative); // False

//***************   every() ****************/
//6) every() - checks if all elements satisfy a condition.
// Return true if all elements pass the condition, else false.

// Syntax : - array.every(function(currentValue, index, array){});

let numbers:number[] = [1,2,3,4,5];
// Example 1:
// let allEven = numbers.every((ele)=> ele%2==0);
// console.log("Are all numbers are even?", allEven); // False

//  Example 2: 
// let allGreaterThanOne = numbers.every((ele)=> ele>=1);
// console.log("Are all the number are gretaer than or equal to one:", allGreaterThanOne); // True

//  Example 3: 

let allPositive = numbers.every((ele)=>ele>0);
console.log("Are all the elements are greater then zero(postive):", allPositive); // True

