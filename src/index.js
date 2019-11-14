import * as cm from './common';


// game engine function
const game = (properties, func, attempts = 3) => {
  cm.welcome();
  // print rules of the game
  const gameRules = properties.rules;
  console.log(gameRules);
  // request user name
  const name = cm.getUserName();
  // greet the user
  cm.greetings(name);

  // set the number of attempts
  let attemptsNumber = attempts;
  // set the game result variable
  let success = true;

  // start the game loop
  while (attemptsNumber > 0) {
    // get a question and correct answer from the game function
    const { question, answer } = func();
    // print a question
    cm.question(question);
    // ask the user an answer
    const userAnswer = cm.answer();
    // check the round results
    success = cm.isAnswerCorrect(answer, userAnswer);
    // discrease attempts number. Set to zero if user's answer was wrong
    attemptsNumber = success ? attemptsNumber - 1 : 0;
    // print result message
    console.log(cm.message(success, userAnswer, answer));
  }
  // print final message
  console.log(cm.finalMessage(success, name));
};


export default game;
