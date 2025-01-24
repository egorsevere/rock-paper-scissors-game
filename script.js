let scoreUser = 0; 
let scorePC = 0;
const values = ['rock','paper','scissors'];
const whoWin = ['User Win', 'PC Win'];
const rps = (userPick, computerPick) => {

const userLow = userPick.toLowerCase()

  if(userLow === 'rock' && computerPick === 'scissors') {
    scoreUser++
  } else if(userLow === 'scissors' && computerPick === 'paper') {
    scoreUser++
  } else if(userLow === 'paper' && computerPick === 'rock') {
    scoreUser++
  } else if(userLow === computerPick) {
    scoreUser + 0;
  } else if(!values.some(x => x === userLow)) {
   return 'Error';
  } else {
    scorePC++
  }
    
}

const round = () => {
    
}

const game = () => {
 

  while(scoreUser < 3 && scorePC < 3) {
    const us = prompt('Rock, Paper, Scissors?');
    const pc = values[Math.floor(Math.random() * 3)];
    console.log(`us=${us}, pc=${pc}`);

    rps(us, pc) === 'Error' ? console.log('Error') :
    console.log(`User: ${scoreUser}, PC:${scorePC}`);
  }

  return whoWin[[scoreUser, scorePC].indexOf(3)]

}

