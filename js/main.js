const userChoice = document.createElement('h3');
const computerChoice = document.createElement('h3');
const result = document.createElement('h2');

const game = document.getElementById('game');
game.append(userChoice,computerChoice,result);

const choices = ['rock', 'paper', 'scissors'];
let userC;
let compuChoice;
let finalresult;

const handleClick = (e) =>{
   userC = e.target.id;
   userChoice.innerHTML = 'User choice: ' + userC;
   generateCompChoice();
   getResult();
}

const generateCompChoice = () => {
    compuChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice.innerHTML =  'Computer choice: ' + compuChoice;
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id=choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick);
    game.appendChild(button);
}

const getResult = () => {
    if (userC === compuChoice) {
        finalresult = 'It\'s a draw!';
        result.innerHTML = finalresult;
    }
    else if (compuChoice === 'rock' && userC === 'paper') {
        finalresult = 'You lost!';
        result.innerHTML = finalresult;
    }
    else if (compuChoice === 'paper' && userC === 'rock') {
        finalresult = 'you won!';
        result.innerHTML = finalresult;
    }
    else if (compuChoice === 'paper' && userC === 'scissors') {
        finalresult = 'you won!';
        result.innerHTML = finalresult;
    }
    else if (compuChoice === 'scissors' && userC === 'paper') {
        finalresult = 'you lost!';
        result.innerHTML = finalresult;
    }
    else if (compuChoice === 'scissors' && userC === 'rock') {
        finalresult = 'you won!';
        result.innerHTML = finalresult;
    }
    else if (compuChoice === 'rock' && userC === 'scissors') {
        finalresult = 'you lost!';
        result.innerHTML = finalresult;
    }
}

