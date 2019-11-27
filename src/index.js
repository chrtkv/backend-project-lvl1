import readlineSync from 'readline-sync';

const attempts = 3;

const engine = (gameFunction, description) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = attempts; i > 0; i -= 1) {
    const { question, answer } = gameFunction();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`\n"${userAnswer}" is wrong answer. Correct answer was "${answer}".\n`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${name}!\n`);
};

export default engine;
