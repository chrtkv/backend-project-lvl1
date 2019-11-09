import * as cm from '../common';

const brainGcd = () => {
  // generate two random numbers
  const firstNumber = cm.getRandomNum();
  const secondNumber = cm.getRandomNum();
  // generate question string
  const questionString = `${firstNumber} ${secondNumber}`;
  // find GCD
  const correctAnswer = cm.gcd(firstNumber, secondNumber);

  return { question: questionString, answer: correctAnswer.toString() };
};

export default brainGcd;
