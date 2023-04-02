const fs = require('fs');
const inquirer = require('inquirer');
const render = require('./lib/shape.js');

inquirer
  .prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3,
    },
    {
      name: 'textColor',
      message: 'Enter text color (name or hex):',
      default: 'black',
    },
    {
      name: 'shape',
      message: 'Choose a shape:',
      type: 'list',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter shape color (name or hex):',
      default: 'white',
    },
  ])
  .then(answers => {
    const svg = render(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
  })
  .catch(error => {
    console.log(error);
  });