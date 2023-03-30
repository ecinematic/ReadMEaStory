const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
    type: "input",
    name: "title",
    message: "Name of your Project."
    },
    {
    type: "input",
    name: "description",
    message: "Please describe the project."    
    },
    {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
    },
    {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
    },
    {
    type: "input",
    name: "installation",
    message: "Any installations?"
    },
    {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use."
    },
    {
    type: "input",
    name: "credit",
    message: "List your collaborators, if any."
    },
    {
    type: "list",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]
    },
    {
    type: "input",
    name: "features",
    message: "List features."
    }
];

function initialize() {
    inquirer.prompt(questions).then((responses) => {
        fs.writeFileSync("./form/README.md", generateMarkdown(responses));
    });
};

initialize();

//function writeToFile(fileName, data) {
//    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
//};