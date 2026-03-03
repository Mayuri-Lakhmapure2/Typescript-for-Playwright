// Array in Typescript

// Approach 1: using leteral

// let names:string[]=[]; // Declaration

// //Initialization / Assigning values.

// names[0] = "John";
// names[1] = "Mayuri";
// names[2] = "Veena";
// names[3] = "Piyush";
// names[4] = "Poonam";
// names[5] = "Devanshu";

// console.log(names);

// ...................... OR ...................

// let names:string[] = ["mayuri","veena","piyush","poonam","devanshu"];           // declartion + initialzation
// console.log(names);

// Approach 2 : Using the generic Array<T> type.

let empNames : Array<string> = ["Mayuri","Veena","Piyush","Poonam"];
let empIds: Array<number> = [101,102,103,104];
let data : Array<string | number> = ["Mayuri",101,"Veena",102];
let mixedData : Array<any> = [1,"Mayuri",true,null];


//Example 1 : Iterating over an array using a traditional for loop.

// console.log("Size of an Array:" ,empNames.length);
// console.log("Employee Names ......");

// for (let i=0; i<empNames.length; i++)
// {
//     console.log(empNames[i]);
// }

// Example 2 : Iterating using he 'for ..in' loop (Indexes)

// console.log("Employee Ids.....");

// for (let i in empIds)
// {
//     console.log(empIds[i]);
// }

// Example 3: Iterating using the 'for ...of' loop (values)

// console.log("Mixed Data...");

// for (let value of data)
// {
//     console.log(value);
// }

// Example 4 : Passing an Array to the function.

// search an element in a n array using function.

// function search (ele:number,arr:number[]):boolean
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i] === ele)
//         {
//             return true;
//         }
//     }
//     return false;
// }

// let arr:number[] = [10,20,30,40];

// console.log(search(30,arr));  // true
// console.log(search (100,arr)); // false

// Example 5 : A functions takes an array and returns an array.

function capitalizeWords (arr:string[]):string[]
{
    let result:string[] = [];

    for (let i=0; i<arr.length;i++)
    {
        result[i] = arr[i].toUpperCase();
    }
    return result;


}

let words:string[] = ["hello","world","typescript"];

console.log(capitalizeWords(words));