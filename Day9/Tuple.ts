// Tuple in Typescript.
// - Tuple in Typescript.
// - A tuple is a fixed-length array where each element has a specific type.
// - It helps in storing multiple fields of different data types together.

//Example 1: Tuple with 2 values of string, number.

// let person : [string,number] = ["John",101];

// console.log(person[0]);
// console.log(person[1]);

// console.log(person);

//Example : Tuple with multiple values.

// let user:[ number,string,boolean,number,string] = [10,"John",true,101,"welcome"];

// console.log(user);

//Example 3: Iterating over a tuple using a traditional for loop.

// console.log("using tradtional for loop....");

// for (let i = 0; i<user.length ; i++)
// {
//     console.log(user[i]);
// }

// Example 4: Iterating using a 'for... in' loop (index-based iteration).

// console.log("Using the for....in loop");

// for (let i  in user)
// {
//     console.log(user[i]);
// }

// Example 5 : Iterating using a 'for... of' loop (value-based iteration)

// console.log("Using for....of loop....");

// for(let value of user)
// {
//     console.log(value);
// }


// Example 6 : Tuple array (Array of Tuples)

let students : [number , string] [] = [[101,"mayuri"],[102,"veena"],[103,"pooname"]];

console.log(students.length);
console.log(students[0]);

let tp = students[0];

console.log(tp[0]);
console.log(tp[1]);
