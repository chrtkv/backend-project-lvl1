import readlineSync from 'readline-sync';

// set number of rounds
const attempts = 3;

const engine = (gameFunction, description) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  // start the game loop
  for (let i = attempts; i > 0; i -= 1) {
    const { question, answer } = gameFunction();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // check the round results
    if (answer !== userAnswer) {
      console.log(`\n"${userAnswer}" is wrong answer. Correct answer was "${answer}".\n`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
    console.log('Correct!\n');
  }
  // print final message
  console.log(`Congratulations, ${name}!\n`);
};

export default engine;
