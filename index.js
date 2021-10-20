// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
    },
    {
        type: "input",
        message: "About Project - Give a summary of this project.",
        name: "about",
    },
    {
        type: "input",
        message: "Installation Instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage Information.",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution Guidelines",
        name: "contribution",
    },
    {
        type: "input",
        message: "Testing Intructions",
        name: "tests",
    },
    {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: ["MIT", "GNU", "Apache"]
    },
    {
        type: "checkbox",
        message: "How was it built?",
        name: "languages",
        choices: ["HTML","CSS","Javascript","SQL","PHP"]
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        const mdPageContent = generateMarkdown(data);
        fs.writeFile(fileName, mdPageContent, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const fileName = `README.md`;
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();