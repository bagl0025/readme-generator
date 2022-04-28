function generateReadme(answers) {
  if (!answers.contribute) {
    answers.contribute = "Refer to [Contributor Covenant](https://www.contributor-covenant.org/) for contribution guidelines."
  }

  // language badges
  var languageArray = [  
  "HTML","![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)",
  "CSS","![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)",
  "Bootstrap","![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)",
  "Tailwind","![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)",
  "JavaScript","![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)",
  "jQuery","![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)",
  "NodeJS","![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)"  
  ];
  var includeLang = "";
  for (let i = 0;i < answers.language.length; i++) {
  var lang = answers.language[i].toString();
    if(languageArray.indexOf(lang) !== -1) {
      includeLang = includeLang + languageArray[languageArray.indexOf(lang)+1];
    }
  }

  // license badges
  var licenseArray = [
    "MIT", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "https://opensource.org/licenses/MIT",
    "GPL v3", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "https://www.gnu.org/licenses/gpl-3.0",
    "ISC", "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "https://opensource.org/licenses/ISC"
  ];
  var badge = "";
  var licInfo = "";
  var lic = answers.license.toString();
  badge = licenseArray[licenseArray.indexOf(lic)+1];
  licInfo = licenseArray[licenseArray.indexOf(lic)+2];

  // build readme 
    return `
  
  # ${answers.projectTitle}

  ${includeLang}

  ${badge}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Test](#test)
  * [Questions](#questions)
  * [Github Profile](#github)
    
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  This software is under the [${answers.license}](${licInfo}) license.
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
