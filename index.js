const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
    type: "input",
    name: "title",
    message: "Name of your Project."
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