
///////possible words
function myFunction() {
    var drinkArray = ["martini", "margarita", "sidecar", "gimlet", "mojito", "daiquiri"];
    document.getElementById("wordGuess").innerHTML = drinkArray[Math.floor(Math.random() * words.length)];

    var possibleWord = "M A R T I N I";
    var blankSpaces = "";
    var wordLength = possibleWord.length;

    for (i = 0; i < wordLength; i++) {
        var x = possibleWord.charAt(i);

        if (x == " " || x === "/'") {
            blankSpaces += x;
        } else {
            blankSpaces += "_";
        }
    }
    document.getElementById("blankSpaces").innerHTML = blankSpaces;
}
var guessesLeft = 9;

document.onkeypress = function (keyPressed) {
    var keyPressed || window.event,
        charCode = keyPressed.keyCode || keyPressed.which,
        lettersGuessed = String.fromCharCode(charCode);
    document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    guessesLeft--;
    if (guessesLeft === -1) {
        alert("you Lose1")
    }
}



