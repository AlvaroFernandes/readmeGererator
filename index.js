// package requierd by the app.
const inquirer = require("inquirer");
const fs = require("fs");

// object of questions for user
const questions = [{
        type: "input",
        message: "GitHub username?",
        name: "userName",
        validate: true
    },
    {
        type: "input",
        message: "Your email address?",
        name: "email",
        validate: true
    },
    {
        type: "input",
        message: "Project's name?",
        name: "projectName",
        validate: true
    },
    {
        type: "input",
        message: "Write the installation instructions for your project.",
        name: "install",
        default: "npm i",
        validate: true
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
        name: "license",
        validate: true
    },
    {
        type: "input",
        message: "Write a short descripiton of your project.",
        name: "desc",
        validate: true
    }
];

const prompt = () => {

}

// function to write README file
const writeToFile = (fileName, data) => {

}

// function to initialize program
const init = async() => {
    try {
        const answers = await promptUser();
        const readme = generateREADME(answers);
        await writeFileAsync("README.md", readme);
    } catch (error) {

    }
}

// function call to initialize program
init();