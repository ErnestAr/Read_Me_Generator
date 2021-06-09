// TODO: Include packages needed for this application
const fs = require("fs")


// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "what is your project's description?",
    "What are your project's installation instructions?",
    "What is your project's usage information?",
    "What is your project's contribution guidelines?",
    "What is your project's text instructions?",
    "What is the licence you want to add to your project?",
    "What is your GitHub Account?",
    "What is your email address?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./READ.ME", data, err => err ? console.log("Success!") : console.log("Failed to edit READ.ME"))
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
