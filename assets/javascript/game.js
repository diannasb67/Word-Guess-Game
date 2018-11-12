// <!-- // Create an array of words for user to guess.  My theme is Travel -->

var destinations = ["seychelles", "caribbean", "hawaii", "australia", "thailand", "fiji", "tahiti", "dubai"]

/* // select words from array for user to guess and assign value to each word  */
//ask TA about randomNum.

var randomWord = destinations[Math.floor(Math.random()*destinations.length)];
console.log(randomWord);
$("#word").append(randomWord)


// // create underscores based on word length 
var answerArray = [];
for (var i = 0; i < destinations.length; i++) {
    answerArray[i] = "_";
}

// record the users key pressed using keyup

document.addEventListener('keypress', (event) => { 
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(event.keycode);
    console.log(keycode);
}); 

// create rule that checks users guess
var rightGuess = [];
var wrongGuess = [];
var usersScore = 0;

var playerScore = document.getElementById("wins");




// wins: if correct populate wins and increase score by one point
// loses: if incorrect increase the losses counter and restart the game without a page refresh */
/* // guesses left: number of gusses left that will update */
// record the users keys pressed using keyup
