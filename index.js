const fs = require('fs');
const inquirer = require('inquirer');
const render = require('./lib/shape.js');
const { generateSvg } = require('./lib/shape.js');


const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => {
      if (input.length > 3) {
        return 'Please enter up to three characters';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color:',
  },
];

inquirer.prompt(prompts).then((answers) => {
  const svg = generateSvg(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  fs.writeFile('./examples/logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});