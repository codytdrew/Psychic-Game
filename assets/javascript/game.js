// Created an Array that lists out all of the letter options that the app chooses from.
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");

// This is the function that will be run whenever the user presses a key to make a guess.
document.onkeyup = function(event) {

    // Will determine what letter is selected
    var userGuess = event.key;

    // Randomly makes a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Alert the userGuess and computerGuess
    console.log("User guess: " + userGuess);
    console.log("Computer guess: " + computerGuess);
    
    
}