
let info = [0, 0, 'Some text'];
const body = document.body;

const randomPick = () => {
  const arr = ['rock', 'paper', 'scissors']

  return arr[Math.floor(Math.random() * 3)]
}

 const whoWin = (userPick) => {
  
  const computerPick = randomPick()
    info[2] = '';
  
    userPick === computerPick ? info[2] = 'Draw' :
    userPick === 'rock' && computerPick === 'scissors' ? info[0]++ : 
    userPick === 'scissors' && computerPick === 'paper' ? info[0]++ : 
    userPick === 'paper' && computerPick === 'rock' ? info[0]++ : info[1]++;
    
    document.getElementById('infoUser').textContent = info[0];
    document.getElementById('infoPc').textContent = info[1];

    
    info[0] === 3 ? info[2] = 'User Win':
    info[1] === 3 ? info[2] = 'Comp Win': info[2] = `User: ${userPick} ; Comp: ${computerPick}`;
    document.getElementById('infoMessage').textContent = info[2];
  }

 

 const customScore = (scoreUser, scorePC, parent) => {
  const score = document.createElement('div');
  score.textContent = `User: ${scoreUser} PC: ${scorePC}`
  score.setAttribute('id', 'score')
  parent.appendChild(score);

  return score;
};

 const customBtn = (text, id, parent) => {
  const rockBtn = document.createElement('button');
  rockBtn.textContent = text;
  rockBtn.className = 'customBtns';
  rockBtn.setAttribute('id', id);
  parent.appendChild(rockBtn);

  return rockBtn;
};






const game = () => {


  const containerForBtns = document.createElement('div');
        containerForBtns.classList.add('containerForBtns');
        body.appendChild(containerForBtns);

  const containerForInfos = document.createElement('div');
        containerForInfos.classList.add('containerForInfos');
        body.appendChild(containerForInfos);

  const infoUser = document.createElement('p');
        infoUser.classList.add('infos');
        infoUser.setAttribute('id', 'infoUser');
        infoUser.textContent = info[0];
        containerForInfos.appendChild(infoUser);

  const infoPc = document.createElement('p');
        infoPc.classList.add('infos');
        infoPc.setAttribute('id', 'infoPc');
        infoPc.textContent = info[1];
        containerForInfos.appendChild(infoPc);

  const infoMessage = document.createElement('p');
        infoMessage.classList.add('infos');
        infoMessage.setAttribute('id', 'infoMessage');
        infoMessage.textContent = info[2];
        containerForInfos.appendChild(infoMessage);
  
 
  customBtn('Rock', 'rock', containerForBtns)
  .addEventListener('click', (event) => {
 
    whoWin(event.target.id)
    
  } );
  customBtn('Paper', 'paper', containerForBtns)
  .addEventListener('click', (event) => {
    
    whoWin(event.target.id)
    
  } );
  customBtn('Scissors', 'scissors', containerForBtns)
  .addEventListener('click', (event) => {
    
    whoWin(event.target.id)
   
  } );

  

};

game();


    