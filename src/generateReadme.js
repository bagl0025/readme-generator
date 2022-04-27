function generateReadme(answers) {
  if (!answers.contribute) {
    answers.contribute = "Refer to Contributor Covenant - https://www.contributor-covenant.org/ for contribution guidelines."
  }

  //licesnse
  if (answers.license === "MIT") {
    var badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    var licInfo = "https://opensource.org/licenses/MIT";
  }
  else if (answers.license === "GPL v3") {
    var badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    var licInfo = "https://www.gnu.org/licenses/gpl-3.0";
  }
  else if (answers.license === "ISC") {
    var badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    var licInfo = "[ISC License Information](https://opensource.org/licenses/ISC)";
  }
  else {
    var badge = "";
    var licInfo = "";
  }
 // build readme 
    return `
  
  # ${answers.projectTitle}
---
  ${badge}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  *[License](#license)
  *[Contribute](#contribute)
  *[Test](#test)
  *[Questions](#questions)
  * [Github Profile](#github)
    
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ${licInfo}
  ## Contribute
  ${answers.contribute}
  ## Test
  ${answers.test}
  ## Questions
  Contact author at ${answers.question} for questions.
  ## GitHub
  https://github.com/${answers.github}
  `;
  };
  
  module.exports = generateReadme;
