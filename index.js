// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./src/generateReadme.js");

const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title? (Required)',
        validate: projectTitleInput => {
            if (projectTitleInput){
                return true;
            }
            else {
                console.log("Project title is required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            }
            else {
                console.log("Project description is required.");
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'toc',
        message: 'Which sections would you like to include in the Tabel of Contents? (Check all that apply)',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']  
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to provide installation instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installtion instructions:',
        when: ({ confirmInstall }) => {
            if (confirmInstall) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on usage here: (Required)',
        validate: usageInput => {
            if (usageInput){
                return true;
            }
            else {
                console.log("Usage is required.");
                return false;
            }
        }
    }
]
function init () {
    inquirer.prompt(questions)
    .then((answers) => {   
        console.log("Making ReadMe",answers);
        fs.writeFile("./ReadMe_test.md", JSON.stringify(answers), err => {
            if (err) throw new Error(err);
        });
    });
};
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log('Page created! Check out index.html in this directory to see it!');
//   });
   
init()
// console.log(answers);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// questions();
// console.log(questions);


