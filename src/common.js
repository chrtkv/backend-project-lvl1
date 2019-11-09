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
// addition
const addition = (a, b) => a + b;
// multiplication
const multiplication = (a, b) => a * b;
// substraction
const substraction = (a, b) => a - b;
// division
const division = (a, b) => a / b;


// User interaction functions

// welcome the user
const welcome = () => console.log(hlImportant('\nWelcome to the Brain Games!'));
// ask the user
const ask = (question) => readlineSync.question(`${question} `);
// get user name
const getUserName = () => ask('May I have your name?');
// say hello to the user
const greetings = (name) => console.log(`Hello, ${name}!\n`);
// question template
const question = (content) => console.log(`Question: ${content}`);
// answer request template
const answer = () => ask('Your answer:');
// answer check
const isAnswerCorrect = (correctAnswer, userAnswer) => correctAnswer === userAnswer;
// print message
const message = (bool, userAnswer, correctAnswer) => {
  if (bool) {
    return hlSuccess('Correct!🔥\n');
  }
  return hlFail(`\n"${highlight(userAnswer)}" is wrong answer. Correct answer was "${highlight(correctAnswer)}". 😔\n`);
};
// print final message
const finalMessage = (bool, userName) => {
  if (bool) {
    return hlSuccess(`\nCongratulations, ${userName}! 💪\n`);
  }
  return hlSuccess(`Let's try again, ${userName}! 💪\n`);
};


export {
  welcome, ask, greetings, getUserName, highlight,
  hlQuestion, hlSuccess, hlFail, hlImportant, getRandomNum,
  isEven, addition, multiplication, substraction,
  division, isAnswerCorrect, message, finalMessage,
  question, answer,
};
