// TODO: Include packages needed for this application
const fs = require("fs")
 const inquirer = require("inquirer")
 const generateMarkdown = ("./generateMarkdown.js").generateMarkdown

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
    fs.writeFile("./READ.ME", generateMArkdown(data), err => err ? console.log("Success!") : console.log("Failed to edit READ.ME"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
        type: 'input',
        message:  questions[3],
        name: 'usage',
    },
    {
    type: 'input',
    message:  questions[4],
    name: 'contribution',
    },
    {
    type: 'input',
    message:  questions[5],
    name: 'instructions',
    },
    {
    type: 'list',
    name: 'license',
    message: questions[6],
    choices: ['Apache 2.0', 'MIT', 'GNU GPL v3', 'ISC'],
    },

    {
    type: 'input',
    message:  questions[7],
    name: 'gitHub',
    },
    {
    type: 'input',
    message:  questions[8],
    name: 'eamil',
    },
  ])
  .then((response) =>
        createHtml(response.uname, response.bio, response.linkedIn, response.gitHub)
  );


}

// Function call to initialize app
init();
