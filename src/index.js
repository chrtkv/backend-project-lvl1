import readlineSync from 'readline-sync';

const greetings = (name) => {
  console.log(`Hello, ${name}`);
};

const interaction = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  greetings(name);
};

export { interaction as default };
