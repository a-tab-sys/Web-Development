use("CrudDb")

// you dont need to remember all the commands just use mongodb's documentation

console.log(db)
/*
//CREATE------------
//create collection
db.createCollection("courses")

//insert document
db.courses.insertOne({
    name: "Harrys web dev free course",
    price: 0,
    assignemnts: 12,
    projects: 45
})

//we will use chagpt to create the text for this document
//insert many document (give it arry of objects)
//evverytime you run this insertMany it reinserts them over and over, so our data hs alot of duplicates
db.courses.insertMany([
    {
        "name": "Harry's Web Dev Free Course",
        "price": 0,
        "assignments": 12,
        "projects": 45
    },
    {
        "name": "Harry's Python Crash Course",
        "price": 0,
        "assignments": 10,
        "projects": 40
    },
    {
        "name": "Harry's JavaScript Mastery",
        "price": 20,
        "assignments": 15,
        "projects": 50
    },
    {
        "name": "Harry's Full-Stack Bootcamp",
        "price": 50,
        "assignments": 25,
        "projects": 60
    },
    {
        "name": "Harry's React Essentials",
        "price": 15,
        "assignments": 8,
        "projects": 30
    },
    {
        "name": "Harry's Advanced Web Design",
        "price": 30,
        "assignments": 20,
        "projects": 35
    },
    {
        "name": "Harry's Data Science Intro",
        "price": 25,
        "assignments": 18,
        "projects": 40
    },
    {
        "name": "Harry's Machine Learning Guide",
        "price": 40,
        "assignments": 22,
        "projects": 55
    },
    {
        "name": "Harry's Cloud Computing Basics",
        "price": 35,
        "assignments": 12,
        "projects": 25
    },
    {
        "name": "Harry's Cybersecurity Fundamentals",
        "price": 45,
        "assignments": 16,
        "projects": 48
    }
]
)

// READ-------------
// find all the data points with a specific characteristic
let a = db.courses.find({price: 0})
console.log(a)

//a returns a cursor so we can check how many is found
console.log(a.count())
console.log(a.toArray())

//will find the first datapoint with price=0
let b = db.courses.findOne({price: 0})
console.log(b)


//UPDATE-------------there is  updateone and update many
//check documentation for syntax

//made the first instance of price=0 equalt to price=100 instead
db.courses.updateOne({price:0}, {$set:{price:100}})
*/
//makes all instances f price=0 equalt to price=100
db.courses.updateMany({price:100}, {$set:{price:1000}})


//DELETE-------------
//will delete first instance
db.courses.deleteOne({price: 40})

//will delete all instances
db.courses.deleteMany({price: 25})

//check documentation to see comparison operators and logical operators
//look into query and projection operators
//https://www.mongodb.com/docs/manual/reference/operator/query/

