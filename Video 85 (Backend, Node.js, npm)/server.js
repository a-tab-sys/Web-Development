console.log("Hello World")

//before when we were using html, css, js we were running in the browser. Now we are learning backend so to run, navigate to your file in terminal and type "node <file name>"

// your backend server will not be visible to clients, this file is not visible to clients. this is where you will connect to databases, do passwork authentification.

//if we want to create a backend that we want to maintain and work with long term, we will initialize it as an npm project so in terminal, in your folder type: npm init. it will ask you some questions in terminal:
// package name:    we will write "spotify" for example
// version:         we will write "1.0.0"
// description:     we will write "this is a spotify clone for my app"
//entry point:      we will keep it as server.js
//test command:     skip for now
//git repositry:    skip for now    
//keywords:         we will write "spotify music"
//author:           we will write "ammaarah"
//licnse:           we left blank

//after we confirm that all the info we typed is okay our folder will contain a package.json. ow our folder is an npm project, we have esscentially initialized it as a single entity. 
// Now i can install and manage packages easily. for instance i write "npm install slugify" or "npm i slugify". this created a folder called node_modules that will hold all of our packages. sometimes packages have dependencies for other packages and this holds those too.
//esscentially installing npm allows us to manage our packages


// when we want to use JS for backend, we need to use node.js and npm. when we have a node.js package we want to get npm in it so that we can manage our packages. also the package retaled information get relayes to our package.json file. if you open package.json you can see the slugify package liste as a dependancy


//if i was now sending and folder to someone and i delete the node_modules folder, thats fine. our package.json file has the dependancies details. the node_modules folder can easily be recreaed by running this command in terminal: "npm install". this will go into my package.json file see what the dependancies are and reinstall the modules and recreate node_modules folder


//Node.js website has an "Introduction to node.js" webpage. usefule resource, has some good tutorials


