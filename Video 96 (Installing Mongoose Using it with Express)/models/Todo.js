
import mongoose from "mongoose"
const TodoSchema = new mongoose.Schema({
    //todo will have 2 things: title and description
    title: String,
    desc: String,
    isDone: Boolean,
    days: Number
  });

  export const Todo = mongoose.model('Todo', TodoSchema);   //added the term "export"


  //baically what we made here is a schema
  //now whenever we make a todo it will need a title, desctption and isdone
  //whats the benefit of this? why are e imposing a condition when we could have just used mongodb without a condition?
  //imposing a condition increases the securinty of your oral application
  //with just mongodb you would have to do these checks yourself, and use alot of if and else staments to see if user were entering a string in titles and a true false value in isDone
  //mongoose just does it for you out of the box

//SCHEMA CAN BE MANY THINGS- CAN BE A STING OR AN OBJECT

//SEE EXAMPLE BELOW

//   const TodoSchema = new mongoose.Schema({
//     //todo will have 2 things: title and description
//     title: {type: String, required: true, default: "hey"},
//     desc: String,
//     isDone: Boolean,
//     days: Number
//   });