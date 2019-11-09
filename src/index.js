import * as cm from './common';
import brainEven from './even';
import brainCalc from './calc';

// list of the games
const games = [
  {
    number: '1',
    name: 'even',
    fn: brainEven,
    rules: `\nGame Rules 🎲\nAnswer ${cm.highlight('"yes"')} if the number is even, otherwise answer ${cm.highlight('"no"')}.\n`,
  },
  {
    number: '2',
    name: 'calc',
    fn: brainCalc,
    rules: '\nGame Rules 🧮\nType the expression result.\n',
  },
];

// game function
const game = (gameNumber, attempts = 3) => {
  // select game properties from the array
  const selectedGame = games.find((gameItem) => gameItem.number === gameNumber);
  // print rules of the game
  const gameRules = selectedGame.rules;
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
    const { question, answer } = selectedGame.fn();
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

// main function
const main = () => {
  // welcome to the gamer
  cm.welcome();
  // show game menu
  const selectedGame = cm.ask(`\nPlease, select game number.
  1. Even Game
  2. Calc Game
`);
  // select number of attempts
  const attempts = 3;
  // run appropriate game
  switch (selectedGame) {
    case '1':
      game(selectedGame, attempts);
      break;
    case '2':
      game(selectedGame, attempts);
      break;
    default:
      console.log('Sorry, enter correct game number');
  }
};

export { main, game };
