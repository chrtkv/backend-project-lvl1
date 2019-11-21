// generate random number. Add one to max value cause Math.random excludes one from results.
const getRandomNum = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

export default getRandomNum;
