function getWinner(player, computer){
if(player === computer){
return "It's a tie 🤝"
}

if (player === "rock" && computer === "scissors" || 
player === "paper" && computer === "rock" ||
player === "scissors" && computer === "paper")
{
return "You wins:)🎉"
}
else{
return "Computer wins 😢"
}

}