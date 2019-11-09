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


// math functions

// generate random number
const getRandomNum = (max = 100) => Math.floor(Math.random() * max);
// check if number is even
const isEven = (num) => (num % 2) === 0;


// User interaction functions

// welcome the user
const welcome = () => console.log(hlImportant('\nWelcome to the Brain Games!'));
// ask the user
const ask = (question) => readlineSync.question(`${question} `);
// get user name
const getUserName = () => ask('May I have your name?');
// say hello to the user
const greetings = (name) => console.log(`Hello, ${name}`);


export {
  welcome, ask, greetings, getUserName, highlight,
  hlQuestion, hlSuccess, hlFail, hlImportant, getRandomNum,
  isEven,
};
