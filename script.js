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

function playRound(playerSelection, computerSelection){
    const info = document.createElement('p');
    let winner;

    if (playerSelection == computerSelection){
        info.textContent = 'tie!!!';
        // console.log('tie!!!')
        resultsArea.appendChild(info)
    }
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            winner = 'computer';
            info.textContent = 'computer wins! Paper beats rock';
            resultsArea.appendChild(info)
            // console.log('computer wins! Paper beats rock')
        }
        else if (computerSelection == 'scissors'){
            winner = 'player';
            info.textContent = 'you win! Rock beats scissors';
            resultsArea.appendChild(info)
            // console.log('you win! Rock beats scissors')
        }
    }
        else if (playerSelection == 'paper'){
            if (computerSelection == 'scissors'){
                winner = 'computer';
                info.textContent = 'computer wins! Scissors beats paper';
                resultsArea.appendChild(info)
                // console.log('computer wins! Scissors beats paper')
            }
        else if (computerSelection == 'rock'){
            winner = 'player';
            info.textContent ='you win! Paper beats rock';
            resultsArea.appendChild(info)
            // console.log('you win! Paper beats rock')
        }
        }
    else if (playerSelection == 'scissors'){
        if (computerSelection == 'paper'){
            winner = 'player';
            info.textContent = 'you win! Scissors beats paper';
            resultsArea.appendChild(info)
            // console.log('you win! Scissors beats paper')
        }
        else if (computerSelection == 'rock'){
            winner = 'computer';
            info.textContent = 'computer wins! Rock beats scissors';
            resultsArea.appendChild(info)
            // console.log('computer wins! Rock beats scissors')
        }
    }
    return winner
}


function playRoundButton(e){
    // console.log(e.target.id)
    playRound(e.target.id, getComputerChoice())
}

const butt = document.querySelectorAll('button');

butt.forEach(button => 
    button.addEventListener('click', playRoundButton));




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

