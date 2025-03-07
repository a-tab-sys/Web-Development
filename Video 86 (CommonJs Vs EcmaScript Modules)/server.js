// An Example Node.js Application
// The most common example Hello World of Node.js is a web server:
// To run this snippet, save it as a server.js file and run node server.js in your terminal.


//code explained in text.txt


//IMPORT BY COMMONJS
//WHEN YOU USE THE require('') THIS IS THE COMMON JS MODULE SYNTAX USED TO IMPORT MODULES IN NODE.JS
// const { createServer } = require('node:http');  
// const fs = require('fs')

//IMPORTING EXPORTS WITH COMMON JS
//remove  "type": "module" from package.json
// const a = require("./myModuleCommonJS")
// console.log(a, __dirname, __filename)

//THIS BELOW FUNCTION IS WHERE MODULE, EXPORTS, REQUIRE,ETC COMES FROM.
//IF OU ARE USING COONJS IN NODE.JS THAN AUTOMATICALLY THE CODE YOU WRITE IS WRAPPED IN THE BELOW FUNCTION. THATS WHY WE CAN USE THE VARIABLE REQUIRE AND MODULE BC ITS AUTOMATICALLY WRAPPED.
// (function(exports, require, module, __filename, __dirname){

//     //module code acctually lives here
// });




//IMPORT BY ECMASCRIPT MODULES
// in package.json you set your type=module, now you can no longer use require to import modules
import http from "http"

//IMPORTING EXPORTS WITH ECMSRIPT MODULES
import {a, b} from './myModuleECMAScriptExport.js'          //importing a named export
console.log(a,b)
import { e as alpha } from './myModuleECMAScriptExport.js'; //rename named exports during import:
console.log(alpha); 

import anything from './myModuleECMAScriptExport.js';       //importing a default export.The import name does not have to match the exported name.
console.log(anything, anything.x, anything.y);


const hostname = '127.0.0.1';
const port = 3000;

// const server = createServer((req, res) => {                //correct line for commonjs 
const server = http.createServer((req, res) => {        //correct line for ecmascript modules
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Type', 'text/html');
  res.end('Hello World');
//   res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




