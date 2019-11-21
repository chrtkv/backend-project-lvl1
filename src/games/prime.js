import getRandomNum from '../common';
import engine from '..';

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

const gameFunction = () => {
  // generate number for the question
  const question = getRandomNum(0, 500);
  // generate correct answer
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const description = '\nAnswer "yes" if the given number is prime. Otherwise answer "no".\n';
const attempts = 3;

export default () => {
  engine(gameFunction, description, attempts);
};
