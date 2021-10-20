const licenses = require('./licenses')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === "MIT") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    licenseBadge = "";
  };
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "GNU") {
    licenseBadge = "https://opensource.org/licenses/MIT";
  } else if (license === "Apache") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else {
    licenseLink = "";
  };
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "test";
  if (license === "MIT") {
    licenseText = licenses.mit;
  } else if (license === "GNU") {
    licenseBadge = licenses.gnu;
  } else if (license === "Apache") {
    licenseText = licenses.apache;
  } else {
    licenseText = "";
  };
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let license = data.license;
  renderLicenseBadge(license)
  return `
  <div id="top"></div>
  
  ${renderLicenseBadge(license)}
  
  <div align="center">
  <img src="./assets/images/readmelogo.png" alt="Logo" width="80" height="80">
</div>
  <h1>${data.title}</h2>

  <!-- TABLE OF CONTENTS -->
  <details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
</br>


  ## About The Project
  ${data.about}
  <p align="right">(<a href="#top">back to top</a>)</p>

  ## Built With
  ${data.languages}
  <p align="right">(<a href="#top">back to top</a>)</p>

  ## Installation
  ${data.installation}
  <p align="right">(<a href="#top">back to top</a>)</p>

  ## Contributing
  ${data.contribution}
  <p align="right">(<a href="#top">back to top</a>)</p>

  ## Usage
  ${data.usage}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  ## Tests
  ${data.tests}
  <p align="right">(<a href="#top">back to top</a>)</p>

  ## License
  ${data.license} ${renderLicenseLink(license)}
  
  ${renderLicenseSection(license)}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
`;
} 
  

module.exports = generateMarkdown;


