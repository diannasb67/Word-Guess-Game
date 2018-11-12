
// 2. Take the player’s guess.
// 4. Check that the player’s guess is a valid letter.
// 5. Keep track of letters the player has guessed.
// 6. Show the player their progress.
// 7. Finish when the player has guessed the word.

// <!-- // Create an array of words for user to guess.  My theme is Travel -->

var destinations = ["seychelles", "caribbean", "hawaii", "australia", "thailand", "fiji", "tahiti", "dubai"]

/* // select words from array for user to guess and assign value to each word  */
//ask TA about randomNum.


var randomWord = destinations[Math.floor(Math.random()*destinations.length)];
var correctLetter = [];
var wrongLetter = [];
var underScore = [];


console.log(randomWord);
document.getElementById("word").innerHTML = word [randomWord];

// // create underscores based on word length 

var underScore = [];

var generateUnderscore = () => { 
    for (var i = 0; i < word.length; i++) {
        underScore.push('_');
        }
        return underScore;
        }

console.log(generateUnderscore());


// record the users key pressed using keyup

document.addEventListener('keypress', (event) => { 
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(event.keycode);
    console.log(keyword);
});

// create rule that checks users guess




// wins: if correct populate wins and increase score by one point
// loses: if incorrect increase the losses counter and restart the game without a page refresh */
/* // guesses left: number of gusses left that will update */
// record the users keys pressed using keyup
