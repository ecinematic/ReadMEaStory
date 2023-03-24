function generateMarkdown(data) {
    return `
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)

    ## Installation
    ${data.installation}
    `
};

module.exports = generateMarkdown;