import readlineSync from 'readline-sync';

// welcome the user
const greetings = (name) => {
  console.log(`Hello, ${name}`);
};

// interact with the user
const interaction = () => {
  // get user name
  const name = readlineSync.question('May I have your name? ');
  greetings(name);
};

// main function
const game = () => {
  console.log('Welcome to the Brain Games!');
  interaction();
};

export default game;
