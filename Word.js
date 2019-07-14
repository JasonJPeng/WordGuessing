var Letter = require("./Letter.js");
function Word (word) {
    this.theWord = word;
    
    // [obj, obj, ojb, ....]
    this.arrLetters = this.theWord.split('').map(e => new Letter(e) );
    // console.log(this.arrLetters);
    
    // J_S_N P_NG
    this.displayResult = function () {
        // console.log(this.arrLetters.map(e => e = e.getResult()).join(''));
        // use toString() prototype in Letter.js
        console.log(this.arrLetters.join(''));
    }

    this.allDone = false;

    // allTrue -- T  Every letter is matche, including the passed record (Bingo Done!)
    // allFalse -- F The current guess "c" is not matching with any of the letters (Wrong Guess)
    this.guessOne = function (c) {
        var allTrue = true;
        var allFalse = false;
        for(var i =0; i< this.arrLetters.length; i++) {
            //check letter "c" against all letters
            var x = this.arrLetters[i].guessOne(c);  
            allFalse = allFalse || x ;

            // check all letters' record
            allTrue = allTrue && this.arrLetters[i].guessed;        
        }  
        this.allDone = allTrue;       
        return allFalse;       
    }
}
module.exports = Word;
