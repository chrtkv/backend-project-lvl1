import getRandomNum from '../common';
import engine from '..';

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
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd(firstNumber, secondNumber).toString();

  return { question, answer };
};

const description = 'Find the greatest common divisor of the given numbers.';

export default () => {
  engine(gameFunction, description);
};
