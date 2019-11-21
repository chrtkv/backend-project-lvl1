import getRandomNum from '../common';
import engine from '..';

// check if number is even
const isEven = (num) => (num % 2) === 0;

const gameFunction = () => {
  // generate question number
  const question = getRandomNum();
  // calculate correct answer
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const description = '\nAnswer "yes" if the number is even, otherwise answer "no".\n';
const attempts = 3;

export default () => {
  engine(gameFunction, description, attempts);
};
