// // Created an Array that lists out all of the letter options that the app chooses from.
// var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// // Create variables that hold references to the places in the HTML where we want to display things.
// var userChoiceText = document.getElementById("userchoice-text");
// var computerChoiceText = document.getElementById("computerchoice-text");

// // This is the function that will be run whenever the user presses a key to make a guess.
// document.onkeyup = function(event) {

//     // Will determine what letter is selected
//     var userGuess = event.key;

//     // Randomly makes a choice from the options array. This is the Computer's guess.
//     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//     // Alert the userGuess and computerGuess
//     console.log("User guess: " + userGuess);
//     console.log("Computer guess: " + computerGuess);
    
// }

//random number generator and score that value in a varibale

// input - the app picks a random letter (a-z) and the app asks you to guess 
// the user guesses which letter the app chose.
// output - you win by guessing the correct letter, or you lose by guessing the wrong letter
// Get 10 total guesses before game over.  Score kept with guesses left.  You are told the letters you have guessses
// Wins and losses tracked on screen
// variables - wins / losses / letters guessed / guesses left / user pick / computer pick
var appOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var guesses = [];

var appGuess = appOptions[Math.floor(Math.random() * appOptions.length)]
console.log(appGuess);
;

document.onkeyup = function(event) {

    // Will determine what letter is selected
    var userPick = event.key;
    console.log(userPick);
    console.log("checking if same", userPick === appGuess);
    
    var alphabet = false;
    for (i = 0; i < appOptions.length; i++) {
        if (userPick === appOptions[i]) {
            alphabet = true;
        }
    }

    if (alphabet == true) {
        guesses.push(userPick);
    
    // is comp pick = user pick / create if else
    
        if (userPick === appGuess) {
            wins++;
            reset();
            guesses = [];
            alert("You Win!")
        } else {
            guessesLeft--;
            console.log(guessesLeft);
        if (guessesLeft === 0) {
            losses++;
            reset();
            guesses = [];
            alert("You Lose :(");
        }
        } 

        document.getElementById('guesses-text').textContent = guesses; 
        document.getElementById('guessesLeft-text').textContent = guessesLeft;
        document.getElementById('wins-text').textContent = wins;
        document.getElementById('losses-text').textContent = losses;
        
        // if you win or lose, the game repeats - create function for game reset
        function reset(){
            guessesLeft = 10;
            appGuess = appOptions[Math.floor(Math.random() * appOptions.length)];
            console.log(appGuess);
        }
    }
}