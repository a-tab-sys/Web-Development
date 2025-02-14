// create a business name generator by combining a list of adjectives and shop name and another word. DONT USE ARRAY, USING FUNCTION AND STRINGS.

// adj: crazy, amazing, fire
// shopname: Engine, Foods, Garments
// another word: Bros, limited, hub

//forin loop - used to iterate through an object - "key in object" so you see key, and knw your dealing with object

// let rand =Math.random()
// let first, second, third;

// // generating the first word
// // 0 0.33 0.66 1
// if (rand<0.33){
//     first="Crazy"
// }
// else if (rand<0.66 && rand>=0.33)
// {
//     first="Amazing"
// }
// else{
//     first="Fire"
// }

// //generate the second word
// // 0 0.33 0.66 1
// if (rand<0.33){
//     second="Engine"
// }
// else if (rand<0.66 && rand>=0.33)
// {
//     second="Foods"
// }
// else{
//     second="Garments"
// }

// //generate third word
// // 0 0.33 0.66 1
// if (rand<0.33){
//     third="Bros"
// }
// else if (rand<0.66 && rand>=0.33)
// {
//     third="Limited"
// }
// else{
//     third="Hib"
// }



//method 2------------------------------------------
// let fst = {
//     name: "crazy",
//     role: "engine",
//     company: "bros"
// };
// let snd = {
//     name: "amazing",
//     role: "foods",
//     company: "limited"
// };
// let trd = {
//     name: "fire",
//     role: "garments",
//     company: "hub"
// };

// // Create an array of objects
// let elements = [fst, snd, trd];

// // Iterate over keys of the first object
// for (const key in fst) {
//     let i = Math.random();
//     if (i < 0.33) {
//         console.log(elements[0][key]); // From fst
//     } else if (i < 0.66) {
//         console.log(elements[1][key]); // From snd
//     } else {
//         console.log(elements[2][key]); // From trd
//     }
// }




//Method 2 same logic but stored in object-----------------
// let fst = {
//     name: "crazy",
//     role: "amazing",
//     company: "fire"
// };
// let snd = {
//     name: "engine",
//     role: "foods",
//     company: "garments"
// };
// let trd = {
//     name: "bros",
//     role: "limited",
//     company: "hub"
// };

// // Create an array of objects
// let elements = [fst, snd, trd];
// let result = {}; // Object to store the selected values

// // Iterate over keys of the first object
// for (const key in fst) {
//     let i = Math.random();
//     if (i < 0.33) {
//         result[key] = elements[0][key]; // From fst
//     } else if (i < 0.66) {
//         result[key] = elements[1][key]; // From snd
//     } else {
//         result[key] = elements[2][key]; // From trd
//     }
// }

// // Print the entire result to the console
// console.log(result);
