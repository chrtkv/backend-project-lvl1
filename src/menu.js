import * as cm from './common';
import engine from '.';

import { gameProperties as even } from './games/even';
import { gameProperties as calc } from './games/calc';
import { gameProperties as gcd } from './games/gcd';
import { gameProperties as progression } from './games/progression';
import { gameProperties as prime } from './games/prime';


const games = [
  even,
  calc,
  gcd,
  progression,
  prime,
];


// menu function
const menu = () => {
  // collect games' names for a menu
  const gameList = games.map(({ name }) => name);
  // show game menu
  const selectedGameNumber = cm.makeMenu(gameList, 'What game do you want to play?', { cancel: cm.hlFail('EXIT') });
  // check if EXIT selected
  if (selectedGameNumber === -1) {
    console.log(cm.highlight('\nSee you later!\n'));
  } else {
    // get game's properties
    const selectedGame = games[selectedGameNumber];
    // select number of attempts
    const attempts = cm.ask('How many rounds you want to play?');
    // run game
    engine(selectedGame, attempts);
  }
};

export default menu;
