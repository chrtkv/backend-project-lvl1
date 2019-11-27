import getRandomNum from '../common';
import engine from '..';

const makeProgression = (start, step, size) => {
  const result = [];
  for (let i = start; result.length < size; i += step) {
    result.push(i);
  }
  return result;
};

const gameFunction = () => {
  const start = getRandomNum(0, 100);
  const step = getRandomNum(2, 10);
  const size = 10;
  const progression = makeProgression(start, step, size);
  // generate number for 'missed' progression element
  const missed = getRandomNum(0, size - 1);
  // save correct answer
  const answer = progression[missed].toString();
  // generate question string
  const questionStringArr = progression;
  questionStringArr[missed] = '..';
  const question = questionStringArr.join(' ');

  return { question, answer };
};

const description = 'Find the missing number in the progression.';

export default () => {
  engine(gameFunction, description);
};
