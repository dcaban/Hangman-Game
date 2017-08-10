var game_ans = "cartman";
var yourPos = [];
var numCharacters = game_ans.length;
var guessesLeft = 12;
var wins = 0;
var losses = 0;
var numCorrect = 0;
var guessList = [];
console.log("Number of characters in mystery word: " + numCharacters);

var mystery_word = document.getElementById("current-word");

mystery_word.innerHTML = "";

for (var i=0;i<numCharacters;i++) {  
    mystery_word.innerHTML += "_"; 
    yourPos.push("_");
}

var currentProgress = mystery_word.innerHTML;

/* Monitor user decision... */
 document.onkeyup = function(event) {

     
     var userGuess = event.key;
     
     /* Only run actions if user has guesses remaining */
     if(guessesLeft > 0){
         
         /* Continue if the user's guess has not been chosen yet */
        if(guessList.indexOf(userGuess) < 0){
            
             console.log("User guessed: " + userGuess);
            
             if((game_ans.indexOf(userGuess) >= 0)){
                 var currentGuess = "";
                 console.log("It works");
                 for(var i=0;i<game_ans.length;i++){
                     if(game_ans.charAt(i) === userGuess){
                         console.log("Found " + userGuess + " at index: " + i);
                         numCorrect++;
                         yourPos[i] = userGuess;
                         
                         console.log("Progress: " + yourPos);
                     }
                 }
                 yourPos.forEach(function(thing){
                    currentGuess += thing;
                 });
                     
                 
                 mystery_word.innerHTML = currentGuess;
                 
             }
             else{
                 
                guessesLeft--;
                document.getElementById("guesses-left").innerHTML = guessesLeft;
                 
                 if(guessesLeft<12 && guessesLeft>=8){
                    document.getElementById("guesses-left").style.color = "#ffff99";
                 }
                 else if(guessesLeft<8 && guessesLeft>=4){
                    document.getElementById("guesses-left").style.color = "#ff6600";
                 }
                 else if(guessesLeft<4){
                    document.getElementById("guesses-left").style.color = "#ff0000";
                 }
             }
            
            guessList.push(userGuess);
            document.getElementById("used-letters").innerHTML = guessList;
            console.log("Guess List: " + guessList + "\nGuesses Left: " + guessesLeft + "\nCorrect Guesses: ");
        }
         
         if(numCorrect == numCharacters){
             wins++; document.getElementById("wins").innerHTML = wins;
             resetValues();
         }
     
 }
     else{
         losses++;
         document.getElementById("losses").innerHTML = losses;
         resetValues();
     }
     
 };


function resetValues(){
    guessesLeft = 12;
    numCorrect = 0;
    guessList = [];
    yourPos = [];
    
    mystery_word.innerHTML = "";
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("used-letters").innerHTML = "";
    document.getElementById("guesses-left").style.color = "white";
    
    
    for(var i=0;i<numCharacters;i++){  
        mystery_word.innerHTML += "_"; 
        yourPos.push("_");
    }
    currentProgress = mystery_word.innerHTML;
}