import getRandomNum from '../common';
import engine from '..';

// addition
const addition = (a, b) => a + b;
// multiplication
const multiplication = (a, b) => a * b;
// substraction
const substraction = (a, b) => a - b;

const gameFunction = () => {
  // define operations
  const operations = [
    { fn: addition, sign: '+' },
    { fn: multiplication, sign: '*' },
    { fn: substraction, sign: '-' },
  ];

  const firstIndex = 0;
  const lastIndex = operations.length - 1;
  // generate operation number
  const operationNumber = getRandomNum(firstIndex, lastIndex);
  // select operation function
  const operation = operations[operationNumber].fn;
  // select appropriate sign
  const operationSign = operations[operationNumber].sign;
  // generate first random number
  const firstNumber = getRandomNum();
  // generate second random number
  const secondNumber = getRandomNum();

  // generate expression string
  const question = `${firstNumber} ${operationSign} ${secondNumber}`;
  // calculate correct answer
  const answer = operation(firstNumber, secondNumber).toString();

  return { question, answer };
};

const description = '\nCalculate the expression result.\n';
const attempts = 3;

export default () => {
  engine(gameFunction, description, attempts);
};
