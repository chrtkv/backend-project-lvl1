import readlineSync from 'readline-sync';
import chalk from 'chalk';


// decoration templates

// use for important parts of text
const highlight = chalk.yellow.bold;
// use to mark successful results
const hlSuccess = chalk.green.bold;
// use to mark fails
const hlFail = chalk.red.bold;
// use for the start message and important headers
const hlImportant = chalk.bold.blueBright;


// math functions

// generate random number. Add one to max value cause Math.random excludes one from results.
const getRandomNum = (max = 100) => Math.floor(Math.random() * (max + 1));
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
// find GCD
const gcd = (a, b) => {
  const divisor = a > b ? b : a;

  const findGCD = (m, n, div) => {
    if (div === 0) {
      return 1;
    }
    if ((m % div === 0) && (n % div === 0)) {
      return div;
    }
    return findGCD(m, n, div - 1);
  };

  return findGCD(a, b, divisor);
};
// make progression
const makeProgression = (start, step, size = 10) => {
  const result = [];
  for (let i = start; result.length < size; i += step) {
    result.push(i);
  }
  return result;
};
// check if number is prime
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};


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
  hlSuccess, hlFail, hlImportant, getRandomNum,
  isEven, addition, multiplication, substraction,
  division, isAnswerCorrect, message, finalMessage,
  question, answer, gcd, makeProgression, isPrime,
};
