// EXPLORE THIS PACKAGE:
// https://www.npmjs.com/package/mongodb
//YOULL HAVE TO LOOK AT DOCUMENTATION


//do  in terminal: 
//npm i mongoose

//mongoose is a package

//IN PACKAGE.JSON add a type parameter and set it to module

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

// get the connection string from the mongodb extension tab>right click local host > copy connection string
//imagine we are making a todo list-so ets add /todo to our connection string
(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo");
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
})();
// then do 
// npm i express@4

//express hello world template and we added paprts fro the mongoose documentation to beow
// const express = require('express')  #remove this line
const app = express()
const port = 3000

//the database will update when eer ou visit the endPOINT not from cliking run on main.js
app.get('/', (req, res) => {
    const todo = new Todo({
        title: "chal rha hai",
        desc: "Description of this todo",
        isDone: false,
        days: "williwork"})
    todo.save()
    res.send('Hello World! todo saved')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// lets make a folder called models, thsi will let us define our schema and the way in which our database stores values

//turn on nodemon
// nodemon main.js

//had you put 1  in the tile this would work but it would insert it as a string FOR YOU AUTOMATICALLY
//days is supposto expec a number, if i put some string what will happen? -> it will give a validation failed message
//we tested it

// mongoose is like a traffic police
//this adds security

//if you didnt have nodemon you would restart server by typing in terminal:
//node main.js