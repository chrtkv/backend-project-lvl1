import * as cm from './common';
import brainEven from './games/even';
import brainCalc from './games/calc';
import brainGcd from './games/gcd';
import brainProgression from './games/progression';
import brainPrime from './games/prime';

// list of the games
const games = [
  {
    id: 1,
    name: 'Evenness Check',
    fn: brainEven,
    rules: `\nGame Rules 🎲\nAnswer ${cm.highlight('"yes"')} if the number is even, otherwise answer ${cm.highlight('"no"')}.\n`,
  },
  {
    id: 2,
    name: 'Calculator',
    fn: brainCalc,
    rules: '\nGame Rules 🧮\nCalculate the expression result.\n',
  },
  {
    id: 3,
    name: 'Find GCD',
    fn: brainGcd,
    rules: '\nGame Rules 💭\nFind the greatest common divisor of the given numbers.\n',
  },
  {
    id: 4,
    name: 'Arithmetic Progression',
    fn: brainProgression,
    rules: '\nGame Rules 📶\nFind the missing number in the progression?\n',
  },
  {
    id: 5,
    name: 'Prime Number',
    fn: brainPrime,
    rules: `\nGame Rules 🔢\nAnswer ${cm.highlight('"yes"')} if the given number is prime. Otherwise answer ${cm.highlight('"no"')}.\n`,
  },
];

// game function
const game = (gameId, attempts = 3) => {
  // select game properties from the array
  const selectedGame = games.find(({ id }) => id === gameId);
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
  // collect games' names for a menu
  const gameList = games.map(({ name }) => name);
  // show game menu
  const selectedGame = cm.makeMenu(gameList, 'What game do you want to play?', { cancel: cm.hlFail('EXIT') });
  // check if EXIT selected
  if (selectedGame === -1) {
    console.log(cm.highlight('\nSee you later!\n'));
  } else {
    // select number of attempts
    const attempts = cm.ask('How many rounds you want to play?');
    // run appropriate game. Add 1 cause games ids starting from 1.
    game(selectedGame + 1, attempts);
  }
};

export { main, game };
