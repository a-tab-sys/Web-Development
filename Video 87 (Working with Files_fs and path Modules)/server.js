//using require: using commonjs
const fs = require("fs");

// WRITEFILE VS. WRITEFILESYNC
// WRITEFILE IS BETTER APPROACH bs writefilesync cn create problems.

// console.log("starting");
// //writeFileSync write a bocking code, it blocks the main thread, reates the file and then resumes the thread. ending will pint after everything else occurs.
// fs.writeFileSync("hello.txt", "hi, how do you do?" );
// console.log("ending");


//but JS works on an asynchronous approach so the above is not a great approach.

console.log("starting");
//once the write is done, our callback function will print done. Called asynchronously. The file writing starts, but JavaScript does not wait for it to finish. Instead, it moves to the next line.
fs.writeFile("hello2.txt", "hi, how do you do?", () => {
    console.log("done");
    fs.readFile("hello2.txt", (error, data)=>{
        console.log(error, data.toString());
    })
});


fs.appendFile("hello2.txt", " doing well", (error, data) => {
    console.log(data);
});

console.log("ending");

// Why Does It Only Append the First Time?
    // If hello2.txt does not exist, fs.writeFile creates it and writes "hi, how do you do?".
    // fs.appendFile then appends " doing well", so it works as expected.
    // On subsequent runs, fs.writeFile overwrites the file before fs.appendFile runs.





















//CALL-BACK HELL EXAMPLE; CODE BECOMES VERY UNMANAGEABLE; REAPEATED ABOVE OVER AND OVER AND OVER AGAIN

// fs.writeFile("hello2.txt", "hi, how do you do?", () => {
//     console.log("done");
//     fs.readFile("hello2.txt", (error, data)=>{
//         console.log(error, data.toString());
//         //AGAIN
//         fs.writeFile("hello2.txt", "hi, how do you do?", () => {
//             console.log("done");
//             fs.readFile("hello2.txt", (error, data)=>{
//                 console.log(error, data.toString());
//                 //AGAIN
//                 fs.writeFile("hello2.txt", "hi, how do you do?", () => {
//                     console.log("done");
//                     fs.readFile("hello2.txt", (error, data)=>{
//                         console.log(error, data.toString());
//                         //AGAIN
//                         fs.writeFile("hello2.txt", "hi, how do you do?", () => {
//                             console.log("done");
//                             fs.readFile("hello2.txt", (error, data)=>{
//                                 console.log(error, data.toString());
//                             })
//                         });
//                     })
//                 });
//             })
//         });
//     })
// });