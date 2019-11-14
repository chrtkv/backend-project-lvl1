import * as cm from '../common';
import { game } from '..';


const brainCalc = () => {
  // define operations
  const operations = [
    { fn: cm.addition, sign: '+' },
    { fn: cm.multiplication, sign: '*' },
    { fn: cm.substraction, sign: '-' },
    { fn: cm.division, sign: '/' },
  ];

  // generate operation number
  const operationNumber = cm.getRandomNum(3);
  // select operation function
  const operation = operations[operationNumber].fn;
  // select appropriate sign
  const operationSign = operations[operationNumber].sign;
  // generate first random number
  let firstNumber = cm.getRandomNum();
  // generate second random number
  let secondNumber = cm.getRandomNum();

  // integer division primitive realization
  if (operationNumber === 3) {
    // check that the second number isn't zero
    secondNumber = secondNumber === 0 ? 1 : secondNumber;
    // increase it while division remaind isn't equal zero
    while (firstNumber % secondNumber !== 0) {
      // check that the first number is greater than the second, if not swap them
      if (secondNumber > firstNumber) {
        [secondNumber, firstNumber] = [firstNumber, secondNumber];
      } else {
        firstNumber += 1;
      }
    }
  }

  // generate expression string
  const expression = `${firstNumber} ${operationSign} ${secondNumber}`;
  // calculate correct answer
  const correctAnswer = operation(firstNumber, secondNumber).toString();

  return { question: expression, answer: correctAnswer };
};

const gameProperties = {
  id: 2,
  name: 'Calculator',
  fn: brainCalc,
  rules: '\nGame Rules 🧮\nCalculate the expression result.\n',
};

export default () => {
  cm.welcome();
  game(gameProperties, brainCalc);
};
