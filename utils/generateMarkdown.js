// function to generate markdown for README
function generateMarkdown(answers) {

    let typeLicense;

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

module.exports = generateMarkdown;