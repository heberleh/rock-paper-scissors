

var choices = ["paper", "scissors", "rock"];

function computer(){
    return choices[Math.floor(Math.random() * choices.length)];
}

// Returns true if choice1 wins the Paper, Rock, Scissors game.
function game(choice1, choice2){

    if (choice1 == "paper"){
        if (choice2 == "rock") return true;
        if (choice2 == "scissors") return false;        
    }
    
    if (choice1 == "scissors"){
        if (choice2 == "rock") return false;
        if (choice2 == "paper") return true;
    }

    if (choice1 == "rock"){
        if (choice2 == "paper") return false;
        if (choice2 == "scissors") return true;
    }
}


function getSymbol(choice){
    if (choice == "rock") return "<i class=\"button far fa-hand-rock fa-6x\"></i>";
    if (choice == "scissors") return "<i class=\"button far fa-hand-scissors fa-6x\"></i>";
    if (choice == "paper") return "<i class=\"button far fa-hand-paper fa-6x\"></i>";
}

function setUserChoice(choice){
    document.getElementById("userChoice").innerHTML = getSymbol(choice);
}

function setComputerChoice(choice){
    document.getElementById("computerChoice").innerHTML = getSymbol(choice);
}

userPoints = 0;
computerPoints = 0;

function run(choice){

    let computerChoice = computer();
    setComputerChoice(computerChoice);

    let userChoice = choice;
    setUserChoice(userChoice);

    if (userChoice == computerChoice){
        document.getElementById("result").innerHTML = "<p style='color:gray'>Continue!</p>"
    }else{
        let userWon = game(userChoice, computerChoice);

        if (userWon){        
            userPoints += 1;
        }else{        
            computerPoints += 1;
        }
        
        pointMessage(userWon);
    
        updatePoints();
    }
}

function pointMessage(userWon){
    if (userWon){
        document.getElementById("result").innerHTML = "<p style='color:gray'>You point!</p>"
    }else{
        document.getElementById("result").innerHTML = "<p style='color:gray'>Robot points!</p>"
    }
    
}

function lostMessage(){
    document.getElementById("result").innerHTML = "<p style='color:red'>YOU LOST</p>"
}

function wonMessage(){
    document.getElementById("result").innerHTML = "<p style='color:green'>YOU WIN</p>"
}

function updatePoints(){
    document.getElementById("userPoints").innerHTML = userPoints;
    document.getElementById("robotPoints").innerHTML = computerPoints;
    if (userPoints + computerPoints == 5){
        if (userPoints > computerPoints){
            wonMessage();
        }else{
            lostMessage();
        }
        userPoints = 0;
        computerPoints = 0;
    }
}