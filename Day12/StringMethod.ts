// String Methods:

// String : Text value or a combination of characters.

// ************* Length ****************

// let str:string = "Hello , Typescript";
// console.log("Length of the String",str.length);     // 18

// ************** toUpperCase() and toLowerCase() **************

// let str:string = "Hello , Typescript";

// console.log("UpperCase:", str.toUpperCase());    //HELLO , TYPESCRIPT
// console.log("LowerCse:",str.toLowerCase());     //hello , typescript

// ************ chatAt() and indexOf ************
// chatAt - Take index as a parameter.
// indexOf - Take string as a parameter.

// let str:string = "Hello, Typescript";

// console.log(str.charAt(7));        // T
// console.log(str.indexOf("Typescript"));     // 7

// **************** substring() ****************

// let str:string = "Hello, Typescript";
// console.log(str.substring(7,17));  // Typescript

//******************** includes() ********************* */
// return boolean value (true or false)

// let str:string = "Hello, Typescript";
// console.log(str.includes("abc"));  //false
// console.log(str.includes("Hello"));  //true

// ************* startsWith() and endsWith()  *****************
// returns a boolen value
// let str:string = "Hello, Typescript!";
// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("!"));  // false
// console.log(str.endsWith("!")); // true
// console.log(str.endsWith("abc")); // false

// ************ replace() ***********

// let str:string = "Hello, Typescript!";
// console.log(str.replace("Typescript","World"));  // Hello, World!

// ************ Split() **************
// let str:string = "Hello, Typescript!";

//  let words:string[] = str.split(" ");
//  console.log("After splitting string:", words); // [Hello, Typescript];

// Ex 2 
// let mystring:string = "abc@gmail.com,xyzabc";

// let arr = (mystring.split(","));
// console.log("After splitting string", mystring); // [abc@gmail.com , xyzabc]

// ****************** trim(), trimStart(), trimEnd() *************

// let mystring:string = "   Welcome to Typescript    ";

// console.log("Orginal String:", mystring);
// console.log("Trim string:", mystring.trim());
// console.log("Start Trim:", mystring.trimStart());
// console.log("End trim:", mystring.trimEnd());

// *************    Concat() ***************

let str1 = "Welcome";
let str2 = "to Typescript";
let str3 = "!";

console.log("After concatenation:", str1.concat(str2));
console.log("After concatenation:", str1 + str2);   // this is alternative but recomended
console.log("Welcome".concat("to Typescript"));
console.log(str1.concat(str2).concat(str3));

// ********** Multiline string ************

let multiline:string = `Welcome to 
                                Typescript`;
                                console.log(multiline);




