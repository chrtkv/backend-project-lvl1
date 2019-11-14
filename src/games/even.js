import * as cm from '../common';
import engine from '..';


const brainEven = () => {
  // generate question number
  const number = cm.getRandomNum();
  // calculate correct answer
  const correctAnswer = cm.isEven(number) ? 'yes' : 'no';
  return { question: number, answer: correctAnswer };
};

const gameProperties = {
  name: 'Evenness Check',
  fn: brainEven,
  rules: `\nGame Rules 🎲\nAnswer ${cm.highlight('"yes"')} if the number is even, otherwise answer ${cm.highlight('"no"')}.\n`,
};

const run = () => {
  engine(gameProperties, brainEven);
};

export { run, gameProperties };
