// Define a JSON object representing information about a person
const personJSON = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "address": {
        "street": "123 Main st",
        "city": "any town",
        "country": "USA"
    },
    "tags": ["JavaScript", "Node.js", "Web Development"],
    "isStuent": false,
    "workExeprience": null,
};


// JSON structure represented as a string
const jsonString = '{"name": "John Doe", "age": 30, "isStudent": true}';

// JavaScript object
const personObject = {
    name: "John Doe",
    age: 30,
    isStudent: true
};

const parsedJSON = JSON.parse(jsonString);
console.log(parsedJSON); // Output: {"name": "John Doe", "age": 30, "isStudent": true}
console.log(typeof parsedJSON); // Output: object

// Directly using JS Object:

console.log(personObject); // Output: {"name": "John Doe", "age": 30, "isStudent": true}
console.log(typeof personObject); // Output: object

