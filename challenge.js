// Good Luck! You got this 💪🏾
// Write your code here.


function playGame(player1,player2){

    if (player1 ==="scissor" && player2 ==="paper") {
      return "player 1 wins"
    } 
    else if(player1 ==="paper" && player2 ==="rock") {
      return "player 2 wins"
    }
    else if(player1 ==="rock" && player2 ==="scissor") {
      return "player 1 wins"
    }
    
    else if(player1 ==="scissor" && player2 ==="scissor") {
      return "tie"
    
  }
  else if(player1 ==="rock" && player2 ==="rock") {
      return "tie"
    
  }
  }
  console.log(playGame("paper","rock"));
  console.log(playGame("scissor","scissor"));
  console.log(playGame("scissor","paper"));
  
  