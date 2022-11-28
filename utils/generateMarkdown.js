// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenses = "";
  if(license === "ISC"){
      licenses = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }else if(license === "MIT"){
      licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }else if(license === "Apache"){
      licenses = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }else if(license === "GNU"){
      licenses = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }else if(license === "Mozilla Public License 2.0"){
      licenses = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }else {
    licenses = "";
  }
  return licenses;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "None"){
    return `## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)`
  }else {
    return `## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return ``
  }else {
    return `
## License 

This app's code is covered by this license: ${license}
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  const fileString = `${answer.license == 'None' ? `# ${answer.title}` : `${renderLicenseBadge(answer.license)} 
# ${answer.title}`}

${renderLicenseLink(answer.license)}

## Description

This description is provided by user: ${answer.description}

## Installation

Here is instalation instruction provided by user: ${answer.installation}
  
## Usage

This is brief usage guide: ${answer.usage}
      
## Contributing

You can contribute by doing next: ${answer.contributing}
  
## Tests

Let's test this way: ${answer.tests}
${renderLicenseSection(answer.license)}
## Questions

This is my GitHub user name: ${answer.username}
You can send your question to my email address: ${answer.email}`;
  return fileString;
};


module.exports = generateMarkdown;