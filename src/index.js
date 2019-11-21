import readlineSync from 'readline-sync';

// User interaction functions

// welcome the user
const welcome = () => console.log('\nWelcome to the Brain Games!');
// ask the user
const ask = (question) => readlineSync.question(`${question} `);
// get user name
const getUserName = () => ask('May I have your name?');
// say hello to the user
const greetings = (name) => console.log(`Hello, ${name}!\n`);
// question template
const askQuestion = (content) => console.log(`Question: ${content}`);
// answer request template
const requestAnswer = () => ask('Your answer:');
// answer check
const isAnswerCorrect = (correctAnswer, userAnswer) => correctAnswer === userAnswer;
// print message
const message = (correct, userAnswer, correctAnswer) => {
  if (correct) {
    return 'Correct!\n';
  }
  return `\n"${userAnswer}" is wrong answer. Correct answer was "${correctAnswer}".\n`;
};
// print final message
const finalMessage = (correct, userName) => {
  if (correct) {
    return `Congratulations, ${userName}!\n`;
  }
  return `Let's try again, ${userName}!\n`;
};

// game engine function
const engine = (gameFunction, description, attempts) => {
  welcome();
  // print rules of the game
  console.log(description);
  // request user name
  const name = getUserName();
  // greet the user
  greetings(name);

  // set the game result variable
  let success = true;

  // start the game loop
  for (let i = attempts; i > 0; i -= 1) {
    // get a question and correct answer from the game function
    const { question, answer } = gameFunction();
    // print a question
    askQuestion(question);
    // ask the user an answer
    const userAnswer = requestAnswer();
    // check the round results
    success = isAnswerCorrect(answer, userAnswer);
    // Set rest of attempts number to zero if user's answer was wrong
    i = success ? i : 0;
    // print result message
    console.log(message(success, userAnswer, answer));
  }
  // print final message
  console.log(finalMessage(success, name));
};


export default engine;
