function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return options[index]
}

function getPlayerChoice(){
    let choice = prompt('Rock, paper or scissors?', 'type here')
    return choice.toLowerCase()
}

function playRound(playerSelection, computerSelection){

    let winner;

    if (playerSelection == computerSelection){
        console.log('tie!!!')
    }
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            winner = 'computer';
            console.log('computer wins! Paper beats rock')
        }
        else if (computerSelection == 'scissors'){
            winner = 'player';
            console.log('you win! Rock beats scissors')
        }
    }
        else if (playerSelection == 'paper'){
            if (computerSelection == 'scissors'){
                winner = 'computer';
                console.log('computer wins! Scissors beats paper')
            }
        else if (computerSelection == 'rock'){
            winner = 'player';
            console.log('you win! Paper beats rock')
        }
        }
    else if (playerSelection == 'scissors'){
        if (computerSelection == 'paper'){
            winner = 'player';
            console.log('you win! Scissors beats paper')
        }
        else if (computerSelection == 'rock'){
            winner = 'computer';
            console.log('computer wins! Rock beats scissors')
        }
    }
    return winner
}

// console.log(getPlayerChoice())



function game(numRounds = 5){
    let computerScore = 0, playerScore = 0;

    for (let i = 0; i < numRounds; i++){
       let round = playRound(getPlayerChoice(), getComputerChoice());
       if (round == 'computer'){
        computerScore++;
       }
       else if (round == 'player'){
        playerScore++
       }
       else{
       }
       console.log(computerScore)
       console.log(playerScore)
    }

    if (computerScore > playerScore){
        console.log('computer wins the game')
    }
    else if (computerScore < playerScore){
        console.log('you win the game')
    }
    else{
        console.log('it\'s a tie!')
    }
}

game()

