import * as cm from './common';


const brainEven = () => {
  // print game rules
  console.log(`\nGame Rules 🎲\nAnswer ${cm.highlight('"yes"')} if the number is even, otherwise answer ${cm.highlight('"no"')}.\n`);
  const name = cm.getUserName();
  cm.greetings(name);

  let attempts = 3;

  while (attempts > 0) {
    const number = cm.getRandomNum();
    console.log(`\nQuestion: ${number}`);
    const answer = cm.ask('Your answer: ');
    const correctAnswer = cm.isEven(number) ? 'yes' : 'no';
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
