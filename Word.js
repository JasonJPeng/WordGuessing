var Letter = require("./Letter.js");
function Word (word) {
    this.theWord = word;
    
    // [obj, obj, ojb, ....]
    this.arrLetters = this.theWord.split('').map(e => e = new Letter(e) );
    
    // J_S_N P_NG
    this.displayResult = function () {
        console.log(this.arrLetters.map(e => e = e.getResult()).join(''));
    }
    
    this.guessOne = function (c) {
        this.arrLetters.map(x => x.guessOne(c)); 
    }
}
module.exports = Word;
