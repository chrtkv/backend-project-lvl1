import getRandomNum from '../common';
import engine from '..';

// make progression
const makeProgression = (start, step, size) => {
  const result = [];
  for (let i = start; result.length < size; i += step) {
    result.push(i);
  }
  return result;
};

const gameFunction = () => {
  // generate random number for progression start
  const start = getRandomNum(0, 100);
  // generate random number for progression step
  const step = getRandomNum(2, 10);
  // progression size
  const size = 10;
  // create progression
  const progression = makeProgression(start, step, size);
  // generate number for 'missed' progression element
  const missed = getRandomNum(0, size - 1);
  // save correct answer
  const answer = progression[missed].toString();
  // make array for question string
  const questionStringArr = progression;
  questionStringArr[missed] = '..';
  // make question string
  const question = questionStringArr.join(' ');

  return { question, answer };
};

const description = '\nFind the missing number in the progression.\n';
const attempts = 3;

export default () => {
  engine(gameFunction, description, attempts);
};
