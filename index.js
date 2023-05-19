// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a description of this project?",
    name: "description",
  },
  {
    type: "list",
    message: "What licnese would you like to use? :",
    name: "license",
    choices: [
      "MIT",
      "Apache",
      "Mozilla Public",
      "Boost Software",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "What is the installation process for this project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use this project",
    name: "usage",
  },
  {
    type: "input",
    message: "Type in your Github username",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
  }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response)
    const str = generateMarkdown(response);
    console.log(str);
    writeToFile("testread.md", str)
  });
}

// Function call to initialize app
init();
