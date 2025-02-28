// JSON = (JavaScript Object Notation) data-interchange format 
//       Used for exchanging data between a server and a web application
//       Usually youll ses a json file as an object made up of{key:value} pairs OR you may see them as an array [value1, value2, value3] or a combination of both. for instance you might have an object where one of the values is an array, or you might have an array of objects

//       JSON.stringify() = converts a JS object to a JSON string.
//       JSON.parse() = converts a JSON string to a JS object


//we created names.json which is an array of first names
//we created person.json which is an object maed upof key value pairs containing the info for a single person. this inclues an array in n object
//we created people.json which is an array of objects


//STRINGIFY
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};

const people = [{
    "name": "Sandy",
    "age": 30,
    "isEmployed": false
},
{
    "name": "Patrick",
    "age": 29,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 27,
    "isEmployed": true
}];

// convert to json string
const jsonString = JSON.stringify(names);
const jsonString1 = JSON.stringify(person);
const jsonString2 = JSON.stringify(people);


console.log(names);     //have an array of strings
console.log(jsonString);    //you get one long string. not really understanding why names and jsonstring differ tbh - look into

console.log(person);
console.log(jsonString1);

console.log(people);
console.log(jsonString2);


//PARSE
//we reformatted the objects/arrays from aboe. to convert the same objects objects or arrays into a string we can surround them with backticks ``.
const jsonnames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonperson = `{"name": "Spongebob","age": 30,"isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonpeople = `[{"name": "Sandy","age": 30,"isEmployed": false},
                {"name": "Patrick","age": 29,"isEmployed": false},
                {"name": "Squidward","age": 27,"isEmployed": true}]`;

//our objects and arrays are in a json format, to convert them to their original form we can use the parse method of json    

const parsedDataNames= JSON.parse(jsonnames);
const parsedDataPerson= JSON.parse(jsonnames);
const parsedDataPeople= JSON.parse(jsonnames);

console.log(jsonnames)          //string representation of array
console.log(parsedDataNames)        //after parsing we get a js array

console.log(jsonperson)
console.log(parsedDataPerson)       //js object

console.log(jsonpeople)           
console.log(parsedDataPeople)       
