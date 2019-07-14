const inquirer = require('inquirer');
const fs = require('fs');
const Word = require("./Word.js");

// var arrPrompts = [
//     {"q": "What's my name ?", "a": "Jason Peng" },
//     {"q": "Who is my father? ", "a": "J. W. Peng"},
//     {"q": "Who is our President? ", "a": "Donald Trump"}    
// ]

var arrPrompts = [];
var maxGuess, iGuess, msgPrompt, objWord, targetWord;
var gameNum = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function startGuessing() {
   var i = getRandomInt(arrPrompts.length);
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
       if (objWord.guessOne(ch)) {
           console.log( ch + " is a correct !")
       } else {
           console.log(ch + " is incorrect! You have " + (maxGuess - iGuess) + " more guesses.")
       }
       
       objWord.displayResult(); 
       if (!objWord.allDone) {
         if (iGuess < maxGuess) {
             iGuess++;
             enterAChar ();
         } else {
             console.log("The correct answer is ", targetWord);
             console.log("G A M E   O V E R ! You completed " + gameNum - 1 + " games");
         }
        } else {
            console.log("Good Job !");
            console.log("===========================");
            console.log(`Starting game number ${gameNum+1} :`);
            startGuessing();
            enterAChar();
        }          
    }
    )
}



fs.readFile('./source/books.txt', 'utf8', function (err, data){
    // console.log(data);
    if (err) throw err;
    var arrStr = data.split('\n');
    arrStr.forEach(function(e) {
        var e1 = e.split("|");
        arrPrompts.push({"q": "The author of " + e1[0].trim() + "\n", "a": e1[1].trim()})
    })
    startGuessing();
    enterAChar();
  })
