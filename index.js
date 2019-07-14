const inquirer = require('inquirer');
const fs = require('fs');
const Word = require("./Word.js");

var arrPrompts = [
    {"q": "What's my name ?", "a": "Jason Peng" },
    {"q": "Who is my father? ", "a": "J. W. Peng"},
    {"q": "Who is our President? ", "a": "Donald Trump"}    
]

var maxGuess, iGuess, msgPrompt, objWord, targetWord;
var gameNum = 0;
function startGuessing() {
   var i = gameNum % arrPrompts.length;
   targetWord = arrPrompts[i].a;  
   maxGuess = targetWord.length*2;
   iGuess = 0;
   objWord = new Word(targetWord);
   msgPrompt = {type:"input", name: "char", message: arrPrompts[i].q};
   
   objWord.displayResult();
   gameNum++;
}

function enterAChar () {
    inquirer.prompt([msgPrompt]).then( ans => {
       var ch = ans.char.charAt(0);
       objWord.guessOne(ch);
       objWord.displayResult(); 
       if (!objWord.allDone) {
         if (iGuess < maxGuess) {
             iGuess++;
             enterAChar ();
         }
        } else {
            console.log("Good Job !");
            console.log("--------------------");
            startGuessing();
            enterAChar();
        }          
    }
    )
}

startGuessing();
enterAChar();
