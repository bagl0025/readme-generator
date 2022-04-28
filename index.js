// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const data = require("./src/data.js");
// for my personal use: standardInput
// const standardInput = require("./src/standardInput.js");
const generateReadme = require("./src/generateReadme.js");
const args = process.argv.slice(2);

// array of questions
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
        type: 'checkbox',
        name: 'language',
        message: 'Select all languages that apply.',
        choices: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'jQuery', 'NodeJS']  
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

// use prompts
function init () {
    inquirer.prompt(questions)
    .then((answers) => {   
        const readMe = generateReadme(answers);
        console.log(answers);
        writeToFile("./dist/README.md", readMe);
    });
};

// populate readme using data in data.js
function initTest (data) {
        console.log(data);
        const readMe = generateReadme(data);
        writeToFile("./dist/README.md", readMe);
};

// default function
console.log(args);
if (args == "data") {
    initTest(data);
}
// this option not advertised
//must uncomment var declaration at top to use
else if (args == "mydata") {
    initTest(standardInput);
}
else if (args == "help") {
    console.log("\n\nindex.js accepts 2 arguments:\nhelp - this message\ndata - use ./src/data.js\nPrompts are used if no argument is provided.");
}
else {
    init();
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
    });
};
