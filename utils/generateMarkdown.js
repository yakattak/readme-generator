// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
      return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`;
  } else {
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
    if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

 //license table of contents
 function renderLicenseTOC(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
 }




//test

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.about}

  * [Description](#description)
  * [Languages](#languages)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Languages
  ${data.languages}

  ## Installation
  ${data.install}

  ## Usage
  ${data.Usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.collabName}

  ## Tests
  ${data.testing}

  ## Questions

  Please contact me using the following links:
  [Github](https://github.com/${data.github})

  [Email: ${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
