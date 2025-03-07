import path from "path"

console.log(path)     //see all the functions in path module  


let myPath="C:\\Users\\Hasaan\\Documents\\Web-Development\\Video 87 (Working with Files_fs and path Modules)\\hello2.txt"

console.log(path.extname(myPath))
console.log(path.dirname(myPath))
console.log(path.basename(myPath))

//you can join 2 paths. the first you wrote with forward slash convention, the second you wrote with backward slach convention. but the path module will understand and correct it for you
console.log(path.join("c:/", "programs\\harry.txt"))



