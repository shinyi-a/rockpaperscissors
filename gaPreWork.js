let gameSelections = ["Lapis", "Papyrus", "Scalpellus"];
let aiInput = "";//gameSelections[Math.floor((Math.random()*gameSelections.length))]; //this is in text
// let userInput = prompt("Please enter either rock, paper or scissors");

let tieCount=[];
let userCount=[];
let aiCount=[];

let rockSelected = () => {
    userInput = gameSelections[0];
    aiInput = gameSelections[Math.floor((Math.random()*gameSelections.length))];
    compareInputs(userInput, aiInput);
    // return compareInputs;
}

let paperSelected = () => {
    userInput = gameSelections[1];
    aiInput = gameSelections[Math.floor((Math.random()*gameSelections.length))];
    compareInputs(userInput, aiInput);
    // return compareInputs;
}

let scissorsSelected = () => {
    userInput = gameSelections[2];
    aiInput = gameSelections[Math.floor((Math.random()*gameSelections.length))];
    compareInputs(userInput, aiInput);
    // return compareInputs;
}

//to compare user input with AI input
let compareInputs = (userSelection, aiSelection) => {
    if (userSelection === aiSelection) {
        document.getElementById("gameResults").style.display="block";
        document.getElementById("tryAgainButton").style.display="block";
        document.getElementById("gameResults").style.backgroundColor="rgba(141, 141, 141, 0.5)";
        document.getElementById("displayResults").innerHTML = "It's a tie!";
        document.getElementById("playerResult").innerHTML = userSelection;
        document.getElementById("aiResult").innerHTML = aiSelection;
        tieCounter();
        document.getElementById("tie").innerHTML = tieCount.length;
        // alert("It's a tie! You choose "+userSelection+", AI choose "+aiSelection+".");
    } else if (userSelection === gameSelections[0] && aiSelection === gameSelections[2]) {
        winMessage(userSelection, aiSelection);
    } else if (userSelection === gameSelections[1] && aiSelection === gameSelections[0]) {
        winMessage(userSelection, aiSelection);
    } else if (userSelection === gameSelections[2] && aiSelection === gameSelections[1]) {
        winMessage(userSelection, aiSelection);
    } else {
        document.getElementById("gameResults").style.display="block";
        document.getElementById("tryAgainButton").style.display="block";
        document.getElementById("gameResults").style.backgroundColor="rgba(255, 179, 179, 0.5)";
        document.getElementById("displayResults").innerHTML = "Sorry! You lost the game!";
        document.getElementById("playerResult").innerHTML = userSelection;
        document.getElementById("aiResult").innerHTML = aiSelection;
        aiWinCounter();
        document.getElementById("aiWins").innerHTML = aiCount.length;
        // alert("You lose! You choose "+userSelection+", AI choose "+aiSelection+".");
    }
}

winMessage = (userSelection, aiSelection) => {
    document.getElementById("gameResults").style.display="block";
    document.getElementById("tryAgainButton").style.display="block";
    document.getElementById("gameResults").style.backgroundColor="rgba(179, 255, 210, 0.5)";
    document.getElementById("displayResults").innerHTML = "Congratulations! You won the game!";
    document.getElementById("playerResult").innerHTML = userSelection;
    document.getElementById("aiResult").innerHTML = aiSelection;
    userWinCounter();
    document.getElementById("userWins").innerHTML = userCount.length;
    // alert("You win! You choose "+userSelection+", AI choose "+aiSelection+".");
}

//count the number of wins between user and AI
tieCounter = () => {
    tieCount.push(1);
}

userWinCounter = () => {
    userCount.push(1);
}

aiWinCounter = () => {
    aiCount.push(1);
}

refreshCounter = () => {
    tieCount.length=0;
    userCount.length=0;
    aiCount.length=0;
    document.getElementById("tie").innerHTML = tieCount.length;
    document.getElementById("userWins").innerHTML = userCount.length;
    document.getElementById("aiWins").innerHTML = aiCount.length;
}

let tryAgain = () => {
    document.getElementById("gameResults").style.display="none";
    document.getElementById("tryAgainButton").style.display="none";
}

//tests if user input is valid
// if (gameSelections.includes(userInput)) {
//     compareInputs(userInput, aiInput);
// } else {
//     // userInput = prompt("Please try again. Enter either rock, paper or scissors");
// }