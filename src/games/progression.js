import * as cm from '../common';
import { game } from '..';


const brainProgression = () => {
  // generate random number for progression start
  const start = cm.getRandomNum(100);
  // generate random number for progression step
  let step = cm.getRandomNum(10);
  step = step === 0 ? 2 : step;
  // create progression
  const progression = cm.makeProgression(start, step);
  // generate number for 'missed' progression element
  const missed = cm.getRandomNum(9);
  // save correct answer
  const correctAnswer = progression[missed].toString();
  // make array for question string
  const questionStringArr = progression;
  questionStringArr[missed] = '..';
  // make question string
  const questionString = questionStringArr.join(' ');

  return { question: questionString, answer: correctAnswer };
};

const gameProperties = {
  id: 4,
  name: 'Arithmetic Progression',
  fn: brainProgression,
  rules: '\nGame Rules 📶\nFind the missing number in the progression?\n',
};

export default () => {
  cm.welcome();
  game(gameProperties, brainProgression);
};
