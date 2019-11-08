import readlineSync from 'readline-sync';
import { welcome } from './common';
import brainEven from './even';

// main function
const game = () => {
  welcome();
  const selectedGame = readlineSync.question(`Please, select game number.
  1. Even Game
  `);
  switch (selectedGame) {
    case '1':
      brainEven();
      break;
    default:
      console.log('Sorry, enter correct game number');
  }
};
export default game;
