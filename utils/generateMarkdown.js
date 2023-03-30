

function generateMarkdown(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Features
${data.features}

## How to Contribute
${data.creator} or email ${data.email}
`
};

module.exports = generateMarkdown;