function Letter(char) { 
    this.char = char;
//    this.guessed = false;
   if (char.toUpperCase() < "A" || char.toUpperCase() > "Z") {
      this.guessed = true; 
   } else {
      this.guessed = false;
   }   
//    this.getResult = function () {
    this.toString = function () {
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
          return  this.guessed = true;
       } else {
          return false; 
       }
   }
}

module.exports = Letter;
