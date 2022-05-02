
  
  # Professional Readme Generator

  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  This is a Command Line Interface (CLI) app that uses NodeJS and the Inquirer package to gather information using a series of prompts. After all of the questions are answered a README.md file is created in the `./dist` folder. The README.md will have the following sections: Title, Description, Installation, Usage, Language, License, Contribute, Test, Questions, and Github. 
  A Table of Contents with links to the sections will also be produced.

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Test](#test)
  * [Questions](#questions)
  * [Github Profile](#github)
    
  ## Installation
    1. Go to [Github section](#github) and follow link. 
    2. Under the `code` buttonselect ssh or https and copy the link. 
    3. At the command prompt navigate to the folder you want the repo in 
       and type `git clone` and paste in the link you copied. 
    4. Navigate to the folder created by the clone process. 
    5. Install the Inquirer module: `npm install inquirer`.
  
  ## Usage
  To execute the program type `node index` and answer the prompts that follow. To fix errors you make during the prompt process you can rerun the program and answerthe promts again or you can edit the mistakes in the README.md file. You can provide the word `data` as an argument to use the data in the `./src` folder. This is useful for testing or in cases where your answers are long.  You can modify `data.js` to fit your needs. If you forget the options just type `node index help`.
  
For more information on usage watch the following video:

  <video width="600" height="480" controls>
    <source src="./src/usage_video.mov">
  </video>
  
  This screenshot shows a summary of the information you provided for the readme.

  <img src=".//images/readme_screenshot.png" alt="readme generator screenshot" width="600"/>

  Here is a link to the README.md file produced in the video. It is located in the repo's `dist` folder.  

  [README.md produced in video](./dist/README.md)

  ## License
  This software is under the [MIT](https://opensource.org/licenses/MIT) license.
  ## Contribute
  Refer to [Contributor Covenant](https://www.contributor-covenant.org/) for contribution guidelines.
  ## Test
  To quickly make sure the program is installed correctly you can use the `data.js` filelocated in `./src`. See the [usage](#usage) section for more information on how to do this.
  ## Questions
  Contact author at bagley@umn.edu for questions or to report issues.
  ## GitHub
  https://github.com/bagl0025/readme-generator
  