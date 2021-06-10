
const fs = require("fs")
const inquirer = require("inquirer")
const generateM = require("./utils/generateMarkdown.js")

const questions = [
    "What is the title of your project?",
    "what is your project's description?",
    "What are your project's installation instructions?",
    "What is your project's usage information?",
    "What are your project's contribution guidelines?",
    "What are your project's test instructions?",
    "What is the licence you want to add to your project?",
    "What is your GitHub Account?",
    "What is your email address?",
];


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
    name: 'email',
    },
  ])
  .then((data) =>
  {const readdata = generateM.generateMarkdown(data);
  fs.writeFile("README.md", readdata, err =>  err ? console.error(err) : console.log('Commit logged!') )
  }
  );
}

init();


