let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);


const getAbsoluteDistance = (x, y) => {
  return Math.abs(x - y);
}

const compareGuesses = (hGuess, cGuess, secret = generateTarget) => {
  if (getAbsoluteDistance(hGuess, secret) < getAbsoluteDistance(cGuess, secret)) {
    return true;
  } else if (getAbsoluteDistance(cGuess, secret) < getAbsoluteDistance(hGuess, secret)) {
    return false;
  } else {
    return true;
  }
};


const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};


const advanceRound = () => {
  return currentRoundNumber += 1;
};
