//view tis in console

//recall fetch returns a promise, we will follow it withthe then method
fetch("person.json")
    //we will be provided with a response object, we will take our response object => convert it to json format. then we will display it. ad a catch method in case we cant access these json files
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))


fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))

// if youanted to iterate through all the objects, lets rename value as values. we will use the build in foreach method of array
fetch("people.json")
    .then(response => response.json())
    //rename value as values. vlues.forEach (take each value => console.log each value). now we are iterating through and printing each object
    .then(values => values.forEach(value => console.log(value)))
    //can also print specific properties
    // .then(values => values.forEach(value => console.log(value.age)))
    .catch(error => console.error(error))