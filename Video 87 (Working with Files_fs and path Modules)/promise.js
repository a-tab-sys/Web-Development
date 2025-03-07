//FS/PROMISE

//using import - using Ecmascript modules. in package.json add type=module
import fs from "fs/promises"

//can also use fs/promise in common js
// const fs= require("fs/promises")

//we can use await here because we are in a module, dont need async
let a = await fs.readFile("hello2.txt");
let b = await fs.writeFile("hello3.txt", "\n\nthis is very cool promise");
b = await fs.appendFile("hello3.txt", "\n\nwow very nice");
b = await fs.appendFile("hello3.txt", "\n\ncool cool cool");

console.log(a.toString());



