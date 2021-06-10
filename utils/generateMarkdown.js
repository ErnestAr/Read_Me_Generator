// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let link =''
function renderLicenseBadge(license) {
  switch (license) {
    case  "Apache 2.0": 
    link = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "MIT": 
    link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "GNU GPL v3": 
    link = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "ISC": 
    link = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
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
    link = "https://choosealicense.com/licenses/gpl-3.0/"
      break;
    case "MIT": 
    link = "https://choosealicense.com/licenses/mit/"
      break;
    case "GNU GPL v3": 
    link = "https://choosealicense.com/licenses/isc/"
      break;
    case "GNU GPL v3": 
    link = "https://choosealicense.com/licenses/isc/"
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
        renderLicenseBadge(license)
        renderLicenseLink(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n 
          ## ${data.description} \n
          ## Table of Contents
          - [Installation](#installation)
          - [Usage](#usage)
          - [Credits](#credits)
          - [License](#license) \n
          ## Installation \n
          ## Usage \n
          ## Credits \n
          ## License \n
          ${renderLicenseSection(data.license)}\n
          ## Features \n
          ## How to Contribute \n
          ## Tests \n
`;
}


module.exports = generateMarkdown;
