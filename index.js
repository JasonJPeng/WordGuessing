const inquirer = require('inquirer');
const fs = require('fs');
const Word = require("./Word.js");

var targetWord = "Jason Peng (XXX)";
var maxGuess = targetWord.length*2;
var iGuess = 0;
var msgQuestion = "Name of US President or Vice President: "

var guessWord = new Word(targetWord);
var msgPrompt = {type:"input", name: "char", message: msgQuestion};

guessWord.displayResult();
function enterAChar () {
    inquirer.prompt([msgPrompt]).then( ans => {
       var ch = ans.char.charAt(0);
       guessWord.guessOne(ch);
       guessWord.displayResult(); 
       if (!guessWord.allDone) {
         if (iGuess < maxGuess) {
             iGuess++;
             enterAChar ();
         }
        } else {
            console.log("Good Job !");
        }          
    }
    )
}

enterAChar();
