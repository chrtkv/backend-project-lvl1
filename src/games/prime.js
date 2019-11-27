import getRandomNum from '../common';
import engine from '..';

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
  const question = getRandomNum(0, 500);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';

export default () => {
  engine(gameFunction, description);
};
