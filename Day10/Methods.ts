// Methods of Array

// Push and Pop

let fruits:string[] = ["Mango","Apple","Grapes","Kiwi"];
let num:number[] = [1,2,3,4,5,6];

// ********* POP ****************
// let lastNum = num.pop();
// console.log("Last Number", lastNum);     // 6

//********** PUSH ****************
// let addFruit = fruits.push("Pineapple");
// console.log("Added fruit is", fruits);

// *********** SHIFT ****************
// let firstFruit = fruits.shift();
// console.log("First Fruit is", firstFruit);
// console.log("Remaining fruits ", fruits);

// ************ UNSHIFT *****************
// let addedFruit = fruits.unshift("Strawberry","Banana");
// console.log(" Added fruits is", addedFruit);
// console.log("Fruits Names are", fruits);

// ************* CONCAT *****************
// let mixArray = num.concat([7,8,9],[10]);
// console.log("Concatenated Array", mixArray);

// ************ SLICE ***********
// console.log ("Fruits Array", fruits);
// let extractedArray = fruits.splice(1,3);
// console.log ("After Slice Remaining fruits in array", extractedArray);

// ********** SPLICE ***********

// fruits.push("Watermelon","Orange","Sweetlime");
// console.log("Fruits in Array", fruits);

// let spliceFruit = fruits.splice(0,2);
// console.log("After Splice extracted fruits", spliceFruit);
// console.log (" After Splice Remaining Fruits ", fruits);

// let spliceFruit = fruits.splice(0,2,"Chiku","Dragon Fruit");
// console.log("After Splice extracted fruits", spliceFruit);
// console.log (" After Splice Remaining Fruits ", fruits);

// ****************    indexOf() ****************
// let bananaIndex = fruits.indexOf("Banana");
// console.log("Index of Banana is", bananaIndex); // -1

// let appleIndex = fruits.indexOf("Apple");
// console.log("Index of Apple is", appleIndex); // 1

// ********** Include *************
// let fruitList = fruits.includes("Apple");
// console.log(" Is Apple Exits ", fruitList); // true

// let findNum = num.includes(20);
// console.log(" Is 20 exits", findNum);  // false

// *************** toString ***********
let alphabets:number[] = [2,3,4,5,6,7];

let stringsAplha = alphabets.toString();
console.log(stringsAplha);