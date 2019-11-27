import getRandomNum from '../common';
import engine from '..';

const isEven = (num) => (num % 2) === 0;

const gameFunction = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  engine(gameFunction, description);
};
