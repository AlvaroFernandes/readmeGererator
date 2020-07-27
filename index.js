// package requierd by the app.
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// object of questions for user
const questions = [{
        type: "input",
        message: "GitHub username?",
        name: "userName"
    },
    {
        type: "input",
        message: "Your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Project's name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Write the installation instructions for your project.",
        name: "install",
        default: "npm i"
    },
    {
        type: "list",
        message: "With license, are you using on your project?",
        choices: [
            'MIT License',
            'GNU Lesser General Public License v3.0',
            'Mozilla Public License 2.0',
            'GNU Affero General Public License v3.0',
            'The Unlicense',
            'Apache License 2.0',
            'GNU General Public License v3.0'
        ],
        name: "license"
    },
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Describe the application usage.",
        name: "usage"
    },
    {
        type: "input",
        message: "Describe the test to be done on the application usage.",
        name: "test"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contributing necessities for this project:"
    }

];

const prompt = () => {
    return inquirer.prompt(questions);
}

function createContant(answers) {


}

const writeFile = (content) => {
    fs.writeFile("readme_generated.md", content, (error) => {
        if (error) {
            return console.log(error);
        }

        console.log("Success!");
    })
}


// function to initialize program
const init = async() => {
    try {
        const answers = await prompt();

        const content = generateMarkdown(answers);
        await writeFile(content);
    } catch (error) {
        console.log(error);
    }
}

// function call to initialize program
init();