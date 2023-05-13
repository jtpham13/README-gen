// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is a description of this project?',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What licnese would you like to use? :',
      name: 'license',
      choices: ['MIT', 'Apache', 'Mozilla Public', 'Boost Software', 'The Unlicense']
    },
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) =>
//    console.log(response)
console.log(generateMarkdown(response))
);
}

// Function call to initialize app
init();
