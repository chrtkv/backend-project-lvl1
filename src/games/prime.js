import * as cm from '../common';
import game from '..';


const brainPrime = () => {
  // generate number for the question
  const questionNumber = cm.getRandomNum(500);
  // generate correct answer
  const correctAnswer = cm.isPrime(questionNumber) ? 'yes' : 'no';

  return { question: questionNumber, answer: correctAnswer };
};

const gameProperties = {
  id: 5,
  name: 'Prime Number',
  fn: brainPrime,
  rules: `\nGame Rules 🔢\nAnswer ${cm.highlight('"yes"')} if the given number is prime. Otherwise answer ${cm.highlight('"no"')}.\n`,
};

export default () => {
  game(gameProperties, brainPrime);
};
