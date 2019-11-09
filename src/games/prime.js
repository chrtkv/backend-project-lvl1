import * as cm from '../common';

const brainPrime = () => {
  // generate number for the question
  const questionNumber = cm.getRandomNum(500);
  // generate correct answer
  const correctAnswer = cm.isPrime(questionNumber) ? 'yes' : 'no';

  return { question: questionNumber, answer: correctAnswer };
};

export default brainPrime;
