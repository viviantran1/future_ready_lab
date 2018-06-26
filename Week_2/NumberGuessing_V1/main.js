/*eslint-env browser*/

function playGame(){
    alert("First enter a low number, then a high number between 0 and 1000. Then, guess a random number between them.");

    // get the low and high bounds
    // uses parseInt() to make sure we have integers
    var from = parseInt(prompt("Enter a lower bound that is greater than or equal to 0."));
    
    while(from < 0 || from > 1000 || isNaN(from)){
        if(from < 0){
            from = parseInt(prompt("Your number was less than 0! Please enter a higher number."));
        } else if(from > 1000){
            from = parseInt(prompt("Your number was greater than 1000! Please enter a lower number."));
        } else if(isNaN(from)){
            from = parseInt(prompt("You did not enter a number! Please enter a lower bound that is greater than or equal to 0."));
        }
    }

    var to = parseInt(prompt("Enter the higher bound."));
    
    while(to < 0 || to > 1000 || to < from || isNaN(to)){
        if(to < 0){
            to = parseInt(prompt("Your number was less than 0! Please enter a higher number."));
        } else if(to > 1000){
            to = parseInt(prompt("Your number was greater than 1000! Please enter a lower number."));
        } else if(isNaN(to)){
            to = parseInt(prompt("You did not enter a number! Please enter a higher bound that is less than or equal to 1000."));
        } else if(to < from){
            to = parseInt(prompt("Your higher bound is lower than your lower bound! Please enter a number higher than " + from + "."));
        }
    }

    // get an integer between [from, to]
    // Math.random() returns decimals, used Math.round to get whole number
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    var totalGuesses = 1;

    // loop until user guesses correct number
    while(currentGuess != target) {
        if(currentGuess < from){
            currentGuess = parseInt(prompt("Enter a number greater than " + from));
            totalGuesses++
        } else if(currentGuess > to){
            currentGuess = parseInt(prompt("Enter a number less than " + to));
            totalGuesses++
        } else if(currentGuess < target){
            currentGuess = parseInt(prompt("Enter a higher number"));
            totalGuesses++
        } else if(currentGuess > target){
            currentGuess = parseInt(prompt("Enter a lower number"));
            totalGuesses++
        }
    }

    alert("It took " + totalGuesses + " tries to guess the correct number.");
}