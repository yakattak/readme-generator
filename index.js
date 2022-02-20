// TODO: Include packages needed for this application
const { writeFile } = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('./utils/generateMarkdown.js');
//const {writefile, copyFile} = require('./utils/generateFile.js');


// TODO: Create an array of questions for user input
//table of contents - links bring me to corresponding section

//email address added to questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your project name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'about',
            message: 'Please enter some information about your project: (Required)',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('Please enter some information!')
                    return false;
                }
            }
        },
          {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your github username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter your email for others to contact you: (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          }, 
          {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Does your project need special instructions on how to install?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter your installation instructions:',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain the usage of this project:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'Creative Commons 1.0', 'GPLv3', 'WTFPL']
        },
        {
            type: 'confirm',
            name: 'collab',
            message: 'Will your project have a collaborator?',
            default: true
        },
        {
            type: 'input',
            name: 'collabName',
            message: 'What is the name of your collaborator? (Required)',
            validate: collabNameInput => {
                if (collabNameInput) {
                    return true;
                } else {
                    console.log("Please provide a collaborator username!");
                    return false;
                }
            },
            when: ({collab}) => collab
        },

        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Will your project need testing instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please input testing instructions for the user:',
            when: ({ confirmTest }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false
                }
            }
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(data => {
        return generateMarkdown(data);
    }).then(data =>
        {
            return writeFile(data);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
