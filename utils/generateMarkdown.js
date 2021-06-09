// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case  "GNU GPLv3": 
      
      break;
    case "MIT": 
      
      break;
    case "ISK": 
      
      break;
  
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case  "GNU GPLv3": 
      
      break;
    case "MIT": 
      
      break;
    case "ISK": 
      
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
