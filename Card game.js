var myScore = 0
var computerScore = 0

var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]

while (myScore < 5 && computerScore < 5)
  
  {
    
    var myCard = Math.floor(Math.random() *13)
    var computer = Math.floor(Math.random() *13)
    
    console.log(cards[ myCard ])
    console.log(cards[ computer ])
    
    if(myCard > computer)
      {
        
       alert(`I won ! ${cards[myCard]} ${cards[computer]}`)
        myScore++;
      }
    
    else if (myCard < computer)
      {
        alert(`Computer won ! ${cards[myCard]} ${cards[computer]}`)
        computerScore++;
      }

    else 
      {
        alert(`Tie ! ${cards[myCard]} ${cards[computer]}`)
      }
    
  }
  
    

    if (myScore == 5)
    {
     alert("I won the game")
    }

    else
     {
       alert ("The computer won")
     }
