import readlineSync from 'readline-sync';
import chalk from 'chalk';

// decoration templates

// use for important parts of text
const highlight = chalk.yellow.bold;
// use for questions
const hlQuestion = chalk.inverse;
// use to mark successful results
const hlSuccess = chalk.green.bold;
// use to mark fails
const hlFail = chalk.red.bold;
// use for the start message and important headers
const hlImportant = chalk.bold.blueBright;

// ask the user
const ask = (question) => readlineSync.question(`${question} `);
// get user name
const getUserName = () => ask('May I have your name?');
// welcome the user
const welcome = () => console.log(hlImportant('\nWelcome to the Brain Games!'));
// say hello to the user
const greetings = (name) => {
  console.log(`Hello, ${name}`);
};

export {
  welcome, ask, greetings, getUserName, highlight,
  hlQuestion, hlSuccess, hlFail, hlImportant,
};
