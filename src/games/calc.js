import getRandomNum from '../common';
import engine from '..';

const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;
const substraction = (a, b) => a - b;

const operations = [
  { fn: addition, sign: '+' },
  { fn: multiplication, sign: '*' },
  { fn: substraction, sign: '-' },
];

const gameFunction = () => {
  const firstIndex = 0;
  const lastIndex = operations.length - 1;

  const operationNumber = getRandomNum(firstIndex, lastIndex);
  const { fn, sign } = operations[operationNumber];
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();

  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = fn(firstNumber, secondNumber).toString();

  return { question, answer };
};

const description = 'Calculate the expression result.';

export default () => {
  engine(gameFunction, description);
};
