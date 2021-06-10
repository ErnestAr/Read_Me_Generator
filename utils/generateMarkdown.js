// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case  "Apache 2.0": 
     return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "MIT": 
     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "GNU GPL v3": 
     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "ISC": 
     return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case  "Apache 2.0" : 
     return "[Apache 2.0](https://choosealicense.com/licenses/gpl-3.0/)"
      break;
    case "MIT": 
     return "[MIT](https://choosealicense.com/licenses/mit/)"
      break;
    case "GNU GPL v3": 
     return "[GNU GPL v3](https://choosealicense.com/licenses/isc/)"
      break;
    case "ISC": 
     return "[ISC](https://choosealicense.com/licenses/isc/)"
      break;
    default:
      break;
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n 
## ${data.description}\n
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions) \n
## Installation \n
${data.installation}\n
## Usage \n
${data.usage}\n
## Credits \n
## License \n
${renderLicenseLink(data.license)}\n
${renderLicenseBadge(data.license)}\n
## Features \n
## How to Contribute \n
${data.contribution}\n
## Tests \n
${data.instructions}\n
## Questions \n
${data.gitHub}\n
${data.email}\n
`;
}

module.exports ={
  generateMarkdown,
} 
