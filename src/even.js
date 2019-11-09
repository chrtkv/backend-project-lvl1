import * as cm from './common';


// print game rules
const rules = () => {
  console.log(`\nGame Rules 🎲\nAnswer ${cm.highlight('"yes"')} if the number is even, otherwise answer ${cm.highlight('"no"')}.\n`);
};

// generate random number
const getRandomNum = (max = 100) => Math.floor(Math.random() * max);

// check if number is even
const isEven = (num) => (num % 2) === 0;

const brainEven = () => {
  rules();
  const name = cm.getUserName();
  cm.greetings(name);

  let attempts = 3;

  while (attempts > 0) {
    const number = getRandomNum();
    console.log(`\nQuestion: ${number}`);
    const answer = cm.ask('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      const correct = cm.hlSuccess('Correct!🔥');
      console.log(correct);
      attempts -= 1;
    } else {
      const wrong = cm.hlFail(`\n"${cm.highlight(answer)}" is wrong answer. Correct answer was "${cm.highlight(correctAnswer)}". 😔\n`);
      console.log(wrong);
      console.log(cm.hlSuccess(`Let's try again, ${name}! 💪\n`));
      return;
    }
  }
  const successMessage = `\nCongratulations, ${name}! 💪\n`;
  console.log(successMessage);
};

export default brainEven;
