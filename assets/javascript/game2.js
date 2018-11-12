// 1. Pick a random word.
// 2. Take the player’s guess.
// 3. Quit the game if the player wants to.
// 4. Check that the player’s guess is a valid letter.
// 5. Keep track of letters the player has guessed.
// 6. Show the player their progress.
// 7. Finish when the player has guessed the word.

// <!-- // Create an array of words for user to guess.  My theme is Travel -->

var destinations = ["Seychelles", "Caribbean", "Hawaii", "Australia", "Thailand", "Fiji", "Tahiti", "Dubai"]

/* // select words from array for user to guess and assign value to each word  */
//ask TA about randomNum.

var randomWord = destinations[Math.floor(Math.random()*destinations.length)];
console.log(randomWord);
$(".word").append(randomWord)

// // create underscores based on word length 

var answerArray = [];
for (var i = 0; i < destinations.length; i++) {
    answerArray[i] = "_";

}

var remainingLetters = word.length;
console.log(answerArray)

// var textarea = document.getElementById("text");
// var result   = document.getElementById("result");

// textarea.addEventListener("input", function(){
//   var v = wordCount( this.value );
//   result.innerHTML = (
//       "<br>Characters (no spaces):  "+ v.charactersNoSpaces +
//       "<br>Characters (and spaces): "+ v.characters +
//       "<br>Words: "+ v.words +
//       "<br>Lines: "+ v.lines
//   );
// }, false);

// //ask TA about var underScore

// var underScore = [];
// var underScore = Array(word.length).join("_ ");


// // record the users key pressed using keyup

// document.addEventListener('keypress', (event) => {
// var keyword = event.keyCode;
// var y = String.fromCharCode(keycode);    
// } 

// create rule that checks users guess
// wins: if correct populate wins and increase score by one point
// loses: if incorrect increase the losses counter and restart the game without a page refresh */}
/* // guesses left: number of gusses left that will update */


// record the users keys pressed using keyup
