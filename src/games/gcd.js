import getRandomNum from '../common';
import engine from '..';

// find GCD
const gcd = (a, b) => {
  const divisor = a > b ? b : a;

  const findGCD = (m, n, div) => {
    if (div === 0) {
      return 1;
    }
    if ((m % div === 0) && (n % div === 0)) {
      return div;
    }
    return findGCD(m, n, div - 1);
  };

  return findGCD(a, b, divisor);
};

const gameFunction = () => {
  // generate two random numbers
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();
  // generate question string
  const question = `${firstNumber} ${secondNumber}`;
  // find GCD
  const answer = gcd(firstNumber, secondNumber).toString();

  return { question, answer };
};

const description = '\nFind the greatest common divisor of the given numbers.\n';
const attempts = 3;

export default () => {
  engine(gameFunction, description, attempts);
};
