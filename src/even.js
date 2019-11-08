import readlineSync from 'readline-sync';
import { getUserName, greetings } from './common';


// print game rules
const rules = () => {
  console.log('\nGame Rules:\nAnswer "yes" if the number is even, otherwise answer "no".\n');
};

// generate random number
const getRandomNum = (max = 100) => Math.floor(Math.random() * max);

// check if number is even
const isEven = (num) => (num % 2) === 0;

const brainEven = () => {
  rules();
  const name = getUserName();
  greetings(name);

  let attempts = 3;

  while (attempts > 0) {
    const number = getRandomNum();
    console.log(`\nQuestion: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      attempts -= 1;
    } else {
      console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`\nCongratulations, ${name}!`);
};

export default brainEven;
