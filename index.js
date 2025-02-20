const choices = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const playerChoice = document.getElementById("playerChoice");
const computerChoice  = document.getElementById("computerChoice");

function playGame(playerSelection){
let randomIndex = Math.floor(Math.random() * 3);
let computerSelection = choices[randomIndex];

playerChoice.textContent = playerSelection;
computerChoice.textContent = computerSelection;

let resultWinner = getWinner(playerSelection, computerSelection)
result.textContent = resultWinner;

}


function getWinner(player, computer){
if(player === computer){
return "It's a tie 🤝"
}

else if (player === "rock" && computer === "scissors" || 
player === "paper" && computer === "rock" ||
player === "scissors" && computer === "paper")
{
return "You wins:)🎉"
}
else{
return "Computer wins 😢"
}

}