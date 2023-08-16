function generateLicenseBadge (license) {
if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
} else if (license === "EPL"){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0),`
} else if (license === "Hippocratic"){
    return `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)`
} else {
    return "";
}
}



function generateMarkdown(data) {
    return`# ${data.title}
${generateLicenseBadge(data.license)}

## Table of Contents
-  [Installation](#installation)
-  [Usage](#usage)
-  [Contributing](#credits)
-  [Tests](#tests)
-  [licenses](#license)
-  [Questions](#questions)


## Project Description
${data.description}


## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.credits}

## Tests
${data.tests}

## License
${data.license}

## Questions
${data.questions}
`

}

module.exports = generateMarkdown