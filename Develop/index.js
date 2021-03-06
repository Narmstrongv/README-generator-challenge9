// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//Title, description, installation instructions, usage info, contribution guidelines, & test instructions

// BASH into Develop to run

// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [
//     "What is your name?",
//     "What program are you using?"
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // file = readme
    // data = content
    // var stringQuestions;

    // for(var i =0; i < data.length; i++) {
    //    stringQuestions += '\n' + data[i]; 
    // }

    fs.writeFile(fileName, data, function(err){

        if(err) {
            console.log(err);
        }
        console.log('success');

    })
}

// TODO: Create a function to initialize app
function init() {
   //writeToFile('readme.md', 'questions');
   inquirer
  .prompt([
    {
        name: 'repoName',
        type: 'input',
        message: 'What is the title of your repository?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please describe your repository.',

    },
    {
      name: 'install',
      type: 'input',
      message: 'Please describe the steps necessary to install your project.',

    },
    {
      name: 'usage',
      type: 'input',
      message: 'Please provide instructions & examples for use.',
    },
    {
      name: 'contribution',
      type: 'input',
      message: 'Please describe you would like others to contribute to your project, otherwise input N.',

    },
    {
      name: 'license',
      type: 'list',
      message: 'Which license would you like to use?',
      choices: ['MIT', 'GPL', 'Apache', 'N/A'  ]
    },
    {
      name: 'git',
      type: 'input',
      message:'Github username:',
    },

  ])
  .then(({
    repoName,
    description,
    install,
    usage,
    contribution,
    license,



    //writeToFile('readme.md', answers.repoName);

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }));
}

// Function call to initialize app
init();
