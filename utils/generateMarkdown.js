// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if(license === 'MIT'){
  return 'https://img.shields.io/badge/License-MIT-yellow.svg';
 }
else if(license === 'Apache'){
  return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
}
else if(license === 'Mozilla Public'){
  return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
}
else if(license === 'Boost Software'){
  return 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
}
else if(license === 'The Unlicense'){
  return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  renderLicenseBadge(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title}


${renderLicenseSection(data.license)}   


${data.description}

${data.license}`;



}

module.exports = generateMarkdown;
