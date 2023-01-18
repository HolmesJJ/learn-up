# LearnUp :books:

[![CI Status](https://github.com/HolmesJJ/learn-up/actions/workflows/github-ci.yml/badge.svg)](https://github.com/HolmesJJ/learn-up/actions)

## Development Setup

### Node Package Manager (v8)
https://docs.npmjs.com/cli/v8/commands/npm-install

## Other Setup Information

### Installing Prettier on Visual Studio Code
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode  
In Visual Studio Code, navigate with the following steps:  
- At the top bar, click View > Extensions
- At the top of the extensions bar, search for Prettier
- Click on the install button

## Before Pushing Code Changes

### Running Lint locally
`npm run lint`
Lint is used as a static code analysis tool that raises up various errors, including non-standard stylistic errors.  
To prevent the CI/CD pipeline from failing, it is a good practice to run lint locally first and resolve any errors that appear.

### Running Barrel
`python3 tools/barrel.py`  
Barrel is a way of making code more readable and maintanable by combining exports from several modules into a single module.
