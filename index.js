// package requierd by the app.
const inquirer = require("inquirer");
const fs = require("fs");

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

];

const prompt = () => {
    return inquirer.prompt(questions).then((response) => {
        const userName = response.userName;
        const email = response.email;
        const projectName = response.projectName;
        const install = response.install;
        const license = response.license;
        const description = response.description;
        const usage = response.usage;
        const test = response.test;
    });
}

const createContant = (answers) => {
    console.log(answers);
    return `# Project Title: ${answers.projectName}
    ![License](https://img.shields.io/badge/License-${answers.license}-green)
    This project was developed by [${answers.userName}](https://github.com/${answers.userName}).
    
    ## Table of Contents
    ** [Description](#Description)
    ** [Install Instructions](#Installation)
    ** [License](#License)
    ** [Usage](#Usage)
    ** [Tests](#Tests)
    ** [Contribution](#Contribution)

    
    
    # Description:
    ${answers.description}
    
    # Installation instructions:
    ${answers.install}
    
    # License:
    This application is licensed under ${answers.license}.
    
    # Usage:
    ${answers.usage}

    # Tests:
    ${answers.test}

    # Contribution:
    ${answers.contribution}
    `;
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
        console.log(answers);
        const content = createContant(answers);
        await writeFile(content);
    } catch (error) {
        console.log(error);
    }
}

// function call to initialize program
init();