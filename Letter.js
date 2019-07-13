function Letter(char) {
   this.char = char;
   if (char === " ") {
      this.guessed = true; // no need to guess white space
   } else {
      this.guessed = false;
   }   
   this.getResult = function () {
       if (this.guessed) {
        //    console.log(char);
        return char + " ";
       } else {
        //    console.log('_');
        return "_ ";
       }
   }

   this.guessOne = function (charGuess) {
       if (charGuess.toUpperCase() === this.char.toUpperCase()) {
           this.guessed = true;
       }
   }
}

module.exports = Letter;
