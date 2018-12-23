
// ///////possible words
// function myFunction() {
//     var drinkArray = ["martini", "margarita", "sidecar", "gimlet", "mojito", "daiquiri"];
//     document.getElementById("wordGuess").innerHTML = drinkArray[Math.floor(Math.random() * words.length)];

//     var possibleWord = "M A R T I N I";
//     var blankSpaces = "";
//     var wordLength = possibleWord.length;

//     for (i = 0; i < wordLength; i++) {
//         var x = possibleWord.charAt(i);

//         if (x == " " || x === "/'") {
//             blankSpaces += x;
//         } else {
//             blankSpaces += "_";
//         }
//     }
//     document.getElementById("blankSpaces").innerHTML = blankSpaces;
// }
// var guessesLeft = 9;

// document.onkeypress = function (keyPressed) {
//     var keyPressed || window.event,
//         charCode = keyPressed.keyCode || keyPressed.which,
//         lettersGuessed = String.fromCharCode(charCode);
//     document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
//     document.getElementById("guessesLeft").innerHTML = guessesLeft;

//     guessesLeft--;
//     if (guessesLeft === -1) {
//         alert("you Lose1")
//     }
// }





//create variables:
//create the array of possible user options, ie all the possible letters to press.
var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// create the array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// create var the Score and set to 0
// computer choices are all the letter keys
var wins = 0;
// create var losses and set to 0
var losses = 0;
// wins and losses start at 0
var numGuesses = 9;
// 9 tries before reset
var guessChoices = [];
// create array for user guesses and leave empty / undefined

// var drinks = ["bourbon", "vodka", "gin", "rum", "rye"]

// //this creates random number that is up the number of numbers in the wordarray index
// var randomWord = drinks[Math.floor(Math.random() * drinks.length)];

//setup when a key is pressed an event is created which is logged to console and called userGuess
document.onkeyup = function (event) {
    console.log(event)
    var userGuess = event.key;

    //this sets var of computer guess to random letter * the length= "position" 0-25 from the computer choice array then it's logged
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);


    // if:  user makes a guess from the correct letters array index user options array is greater than -1 = defined: and the following ifs
    if (userOptions.indexOf(userGuess) > -1) {
        //if users guess equals computerGuess they win and adds 1, game starts over, numGuesses is at 9, and guessChoices resets
        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
            alert("Great job you're the psychic!")
        }
        //if: users guess is not equal to computer guess, they lose 1 guess, and their guess choice is added using .push.
        if (userGuess != computerGuess) {
            numGuesses--;
            guessChoices.push(userGuess);
            //alert("nope!");
        }
        //if: number of guesses is compared equal to zero, theyve used all guesses, restarts the game? losses add 1, restate undefined user guesses
        if (numGuesses === 0) {
            numGuesses = 9;
            losses++;
            guessChoices = [];
            alert("Game over. Try again.")

        }
        /////set the score board to include the choices; include the wins, losses, number of guesses left , and the guesses chosen;

        var html =
            "<h1> The Psychic Game </h1>" +
            "<h3> Press any Key to learn your fortune... </h3>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;
        //then use the Jquery document.querySelector(name of div).innerHTML = the variable for scoreboard

    }
};
