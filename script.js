let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return options[index]
}

function getPlayerChoice(){
    let choice = prompt('Rock, paper or scissors?', 'type here')
    return choice.toLowerCase()
}

const resultsArea = document.querySelector('.results');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerScoreDisplay = document.querySelector('#player-score');

function playRound(playerSelection, computerSelection){
    const info = document.createElement('p');
    let winner;

    if (playerSelection == computerSelection){
        info.textContent = 'tie!!!';
        resultsArea.appendChild(info)
    }
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            winner = 'computer';
            info.textContent = 'computer wins! Paper beats rock';
            resultsArea.appendChild(info)
        }
        else if (computerSelection == 'scissors'){
            winner = 'player';
            info.textContent = 'you win! Rock beats scissors';
            resultsArea.appendChild(info)
        }
    }
        else if (playerSelection == 'paper'){
            if (computerSelection == 'scissors'){
                winner = 'computer';
                info.textContent = 'computer wins! Scissors beats paper';
                resultsArea.appendChild(info)
            }
        else if (computerSelection == 'rock'){
            winner = 'player';
            info.textContent ='you win! Paper beats rock';
            resultsArea.appendChild(info)
         }
        }
    else if (playerSelection == 'scissors'){
        if (computerSelection == 'paper'){
            winner = 'player';
            info.textContent = 'you win! Scissors beats paper';
            resultsArea.appendChild(info)
           }
        else if (computerSelection == 'rock'){
            winner = 'computer';
            info.textContent = 'computer wins! Rock beats scissors';
            resultsArea.appendChild(info)
        }
    }
    return winner
}


function playRoundButton(e){

    let score = playRound(e.target.id, getComputerChoice());

    if (score == 'computer'){
        computerScore += 1;
        computerScoreDisplay.textContent = computerScore;
    }
    else if (score == 'player') {
        playerScore += 1;
        playerScoreDisplay.textContent = playerScore;
    }

    isGameOver();
}




const butt = document.querySelectorAll('button');

butt.forEach(button => 
    button.addEventListener('click', playRoundButton));

function reset(){
        computerScore = 0;
        playerScore = 0;
        computerScoreDisplay.textContent = computerScore;
        playerScoreDisplay.textContent = playerScore;
        resultsArea.innerHTML = '';
    }

 function isGameOver(){
        if (computerScore == 5){
            alert('Computer wins!!!1');
            reset();
        }
        else if(playerScore == 5){
            alert('You win!!!');
            reset();
        }
    }
    


// console.log(getPlayerChoice())



// function game(numRounds = 5){
//     let computerScore = 0, playerScore = 0;

//     for (let i = 0; i < numRounds; i++){
//        let round = playRound(getPlayerChoice(), getComputerChoice());
//        if (round == 'computer'){
//         computerScore++;
//        }
//        else if (round == 'player'){
//         playerScore++
//        }
//        else{
//        }
//        console.log(computerScore)
//        console.log(playerScore)
//     }

//     if (computerScore > playerScore){
//         console.log('computer wins the game')
//     }
//     else if (computerScore < playerScore){
//         console.log('you win the game')
//     }
//     else{
//         console.log('it\'s a tie!')
//     }
// }

// game()

