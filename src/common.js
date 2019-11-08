import readlineSync from 'readline-sync';
import chalk from 'chalk';

// welcome the user
const welcome = () => console.log(chalk.black.bgGreen('Welcome to the Brain Games!'));

// get user's name
const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

// say hello to the user
const greetings = (name) => {
  console.log(`Hello, ${name}`);
};

export {
  welcome, getUserName, greetings,
};
