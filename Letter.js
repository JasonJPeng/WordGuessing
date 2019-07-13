function Letter(char) {
   this.char = char;
   this.guessed = false;
   this.showResult = function () {
       if (this.guessed) {
           console.log(char);
       } else {
           console.log('_');
       }
   }

   this.guessOne = function (charGuess) {
       if (charGuess === this.char) {
           this.guessed = true;
       }
   }
}

module.exports = Letter;
