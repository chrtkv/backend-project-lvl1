import * as cm from './common';


const brainEven = () => {
  // generate question number
  const number = cm.getRandomNum();
  // calculate correct answer
  const correctAnswer = cm.isEven(number) ? 'yes' : 'no';

  return { question: number, answer: correctAnswer };
};

export default brainEven;
