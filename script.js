console.log("Hello World!");


const getComputerChoice = () => {

    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";

        case 1:
            return "paper";
        
        case 2: 
        return "scissors";
                
        default:
            break;
    }

};

const getHumanChoice = (input) =>{

     const userInput = prompt("Enter  rock, paper, or scissors");

     return userInput;


}



// const humanSelection =getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection,computerSelection));
// console.log("Your score is:", humanScore);
// console.log("The computer score is:", computerScore);


const playGame = () =>{


let humanScore = 0;
let computerScore = 0;

    const playRound = ()=>{

        console.log(`The score is ${humanScore}-${computerScore}`)
        const humanSelection =getHumanChoice();
        const computerSelection = getComputerChoice();
        const playerChoice = humanSelection.toLowerCase(); // makes the humanChoice parameter case-insensitive

        if(playerChoice === "rock" && computerSelection ==="scissors" || playerChoice === "paper" && computerSelection ==="rock" || playerChoice === "scissors" && computerSelection ==="paper" ){

            console.log(`You picked ${playerChoice}- the computer picked ${computerSelection}`)

            humanScore+=1;

            return `You win ! ${playerChoice} beats ${computerSelection}`;

        } else if (playerChoice === computerSelection){
            console.log(`You picked ${playerChoice}- the computer picked ${computerSelection}`)
            return `It's a tie ! You chose ${playerChoice} and the computer chose ${computerSelection} `;
        } else{
            console.log(`You picked ${playerChoice}- the computer picked ${computerSelection}`)
            computerScore+=1;
            return `You lose ! ${computerSelection} beats ${playerChoice}`;

        }

    };

    for(let i = 0 ; i < 5; i++){ // play five rounds
        playRound();
    }

    if( humanScore > computerScore ){
        return `You win, ${humanScore}-${computerScore} `;
    } else if( humanScore < computerScore){
       return `You lose, ${computerScore}-${humanScore}`;

    } else{
        return `It is a tie ! ${humanScore}-${computerScore}`;
    }


};

console.log(playGame());