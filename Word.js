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

    // True for all letters are guessed true
    // this.isCorrect = function () {
    //     return this.arrLetters.reduce( (x,y) => (x.guessed===true && y.guessed===true));
    // }
    // this.allDone = this.arrLetters.reduce( (x,y) => (x.guessed===true && y.guessed===true));
    
    this.guessOne = function (c) {
        var allTrue = true;
        for(var i =0; i< this.arrLetters.length; i++) {
            this.arrLetters[i].guessOne(c);    
            allTrue = allTrue && this.arrLetters[i].guessed;        
        }  
        this.allDone = allTrue;              
    }
}
module.exports = Word;
