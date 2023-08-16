const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

async function askQuestions() {
    let response = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
      {
            type: 'input',
            name: 'description',
            message: "Write a description of your project:",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Provide installation instructions for your application.",
          },
        {
            type: 'input',
            name: 'usage',
            message: "Provide examples for use of your application.",
          },
        {
            type: 'input',
            name: 'credits',
            message: "List your third party assests, tutorials or collaborators, if any, with links to their GitHub profiles.",
          },
        {
            type: 'input',
            name: 'tests',
            message: "Provide any tests for you application.",
          },
        {
            type: 'list',
            name: 'license',
            message: "Choose one of the licenses below.",
            choices: [
                'Apache',
                'EPL',
                "Hippocratic",
                'None'
              ],
          },
        {
            type: 'input',
            name: 'gitHubLink',
            message: "Add your Github profile.",
          },
        {
            type: 'input',
            name: 'email',
            message: "Add your email so users can reach you with additional questions.",
          },
    ])
    console.log(response);
    const markdown = generateMarkdown(response);
    console.log(markdown);
    writeToFile("README", markdown);
}

function writeToFile(fileName, data){
  fs.writeFileSync(fileName + ".md", data);
console.log("README Generated");
}

function init() {
    console.log("Welcome to the README Generator!");
    askQuestions();
}
init()

