let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);


const compareGuesses = (hGuess, cGuess, secret = generateTarget) => {
  if (Math.abs(hGuess - secret) < Math.abs(cGuess - secret)) {
    return true;
  } else if (Math.abs(cGuess - secret) < Math.abs(hGuess - secret)) {
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
