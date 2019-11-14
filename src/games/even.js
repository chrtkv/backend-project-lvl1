import * as cm from '../common';
import game from '..';


const brainEven = () => {
  // generate question number
  const number = cm.getRandomNum();
  // calculate correct answer
  const correctAnswer = cm.isEven(number) ? 'yes' : 'no';
  return { question: number, answer: correctAnswer };
};

const gameProperties = {
  id: 1,
  name: 'Evenness Check',
  fn: brainEven,
  rules: `\nGame Rules 🎲\nAnswer ${cm.highlight('"yes"')} if the number is even, otherwise answer ${cm.highlight('"no"')}.\n`,
};

export default () => {
  game(gameProperties, brainEven);
};
