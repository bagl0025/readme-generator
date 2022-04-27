function generateReadme(answers) {
    return `
  
  # ${answers.projecTitle}

  # Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Licenses](#licenses)
  -[Contribution](#contribution)
  -[Tests](#tests)
  -[Questions](#questions)
  -[Github Profile](#github)
  -[Contact Information](#contact)
    
  ##installation:
  ${answers.installation}
  ##usage:
  ${answers.usage}
  ##licenses:
  ${answers.licenses}
  ##contribution:
  ${answers.contribution}
  ##test:
  ##questions:
  ##github:
  #contact
  `;
  };
  
  module.exports = generateReadme;