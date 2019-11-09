import * as cm from './common';
import brainEven from './even';

// main function
const game = () => {
  // welcome to the gamer
  cm.welcome();
  // show game menu
  const selectedGame = cm.ask(`Please, select game number.
  1. Even Game
  `);
  // run appropriate game
  switch (selectedGame) {
    case '1':
      brainEven();
      break;
    default:
      console.log('Sorry, enter correct game number');
  }
};


export default game;
