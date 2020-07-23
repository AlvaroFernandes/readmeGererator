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
    console.log(answers);

    let typeLicense

    switch (answers.license) {
        case 'MIT License':
            typeLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'GNU Lesser General Public License v3.0':
            typeLicense = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
            break;
        case 'Mozilla Public License 2.0':
            typeLicense = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;
        case 'GNU Affero General Public License v3.0':
            typeLicense = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
            break;
        case 'The Unlicense':
            typeLicense = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            break;
        case 'Apache License 2.0':
            typeLicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GNU General Public License v3.0':
            typeLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
    }

    return `# Project Title: ${answers.projectName},

    ${typeLicense}

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
    
    # Questions
    If any questions about the repo, contact me on ${answers.email}. 
    My GitHub profile is [Github profile](https://github.com/${answers.userName}). 
    
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

        const content = createContant(answers);
        await writeFile(content);
    } catch (error) {
        console.log(error);
    }
}

// function call to initialize program
init();