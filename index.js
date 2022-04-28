// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const testData = require("./src/testData.js");
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
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions: (Required)',
        validate: installationInput => {
            if (installationInput){
                return true;
            }
            else {
                console.log("Installation instructions are required.");
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
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license from the list.',
        choices: ['MIT', 'GPL v3', 'ISC']  
    },
    {
        type: 'confirm',
        name: 'confirmContrib',
        message: 'Are you allowing other developers to contribute to this project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide Contribution guidelines here. If you leave this blank the guidelines from Contributor Covenant (https://www.contributor-covenant.org/) will be used.',
        when: ({confirmContrib}) => {
            if (confirmContrib) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions for testing. (Required)',
        validate: testInput => {
            if (testInput){
                return true;
            }
            else {
                console.log("Test instuctions are required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'question',
        message: 'Provide email address for questions. (Required)',
        validate: questionInput => {
            if (questionInput){
                return true;
            }
            else {
                console.log("Email address required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide GitHub account name. (Required)',
        validate: githubInput => {
            if (githubInput){
                return true;
            }
            else {
                console.log("Github account required.");
                return false;
            }
        }
    }
]
function init () {
    inquirer.prompt(questions)
    .then((answers) => {   
        const readMe = generateReadme(answers);
        console.log(answers);
        fs.writeFile("./ReadMe_test.md", readMe, err => {
                if (err) throw new Error(err);
        });
    });
};

// test function using testData in testData.js
function initTest () {
        console.log(testData);
        const readMe = generateReadme(testData);
        fs.writeFile("./ReadMe_test.md", readMe, err => {
                if (err) throw new Error(err);
        });
};
// init();
initTest();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
