# WordGuessing - NODE.JS


![demo](./source/WordGuess.gif)

This *Word Guessing* program is very similar to another program, [_Word Game_](https://jasonjpeng.github.io/WordGame/). Both programs are written in JavaScript, but this *Word Guessing* runs as a CLI (Command Line Interface) by using node.js whereas the _Word Game_ runs on a browser with web interface.

-----
## How does this program run?
1. When you type ````node index```` from the command prompt, the program would load from an external text file, which contains 100+ word guessing questions. (this case, books.txt contains about 100 classic books and authors). 
2. The program would prompt you the name of a randomly picked book and ask you to answer the name of the author with a hint of under line of each character.
3. You can enter a letter to fill the name of the author until all letter spaces are filled.
4. If you guess right the name of an author, the program will prompt you for the second book as Game 2, you can continue to guess the name of the new author.
5. The game would continue as long as you guess right of the name of an author under 15 guesses. It stops when you use all  of your chances of guessing.

----

## Coding

Defining two constructors significantly reduces many lines of codes. 
1. ````Letter```` is designed to check the correctness of each letter of a word. 
2. ````Word```` is designed to instantiate ````Letter```` for each of its letters.
3. We also redefine the internal function ````toString()```` in the ````Letter```` construction to convert elements into a string based on the Word Guessing rule, which make "_" for the letter not guessed.
4. ````chalk```` module is used in this program to enhance the visual effects. 




