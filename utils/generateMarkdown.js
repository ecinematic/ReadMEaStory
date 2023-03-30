function licenseBadge(license) {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "none";
};

function generateMarkdown(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credit)
- [License](#license)
- [Features](#features)
- [Contribute](#creator)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credit}

## License
${data.license}

## Badges
${licenseBadge(data.license)}

## Features
${data.features}

## How to Contribute
${data.creator} or email ${data.email}
`
};

module.exports = generateMarkdown;