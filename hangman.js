//Set up of hangman object containing the game info
//The letterBoard will be the visual representation of the letters i.e. H _ N G / M _ N
//The pictureBoard will be the picture of the man

const hangman = {
    _word:'',
    letterBoard: [],
    lives: 9,
    pictureBoard: [
        [' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ']],
    guessedLetters:[],
    distinctLetters: [],
    get word(){
        return this._word;
    },
    set word(inputWord){                                //Setter function that sets the word and sets up the letterBoard for the game
        if(this._word == ''){
            this._word = inputWord.toUpperCase();
            this.distinctLetters = [...new Set(inputWord.toUpperCase())];
            for (let i = 0; i < inputWord.length; i++){
                if(inputWord[i] == ' '){
                    this.letterBoard.push('/');
                }
                else{
                    this.letterBoard.push('_');
                }
            }
            console.log("------------------------------------");
            console.log(hangman.letterBoard.join(' '));
            console.log("------------------------------------");
        } 
        else{
            console.log('Complete the current game before starting the next!');
        }
    }
}
//Function for displaying the current boards
function displayBoards(){
    console.log("------------------------------------");
    message();
    console.log(hangman.letterBoard.join(' '));
    console.log(hangman.pictureBoard[0].join(''));
    console.log(hangman.pictureBoard[1].join(''));
    console.log(hangman.pictureBoard[2].join(''));
    console.log(hangman.pictureBoard[3].join(''));
    console.log(hangman.pictureBoard[4].join(''));
    console.log(hangman.pictureBoard[5].join(''));
    console.log('Guessed Letters:  ' + hangman.guessedLetters. join('  '));
    console.log("------------------------------------");
}

//Change message depending on the stage of the game
function message(){
    if (hangman.lives == 0){
        console.log('GAME OVER! - YOU HUNG THE MAN!');        
    }
    else if (hangman.distinctLetters.every(x => hangman.guessedLetters.includes(x)) == true){
        console.log('YOU WIN! - YOU GUESSED ALL THE LETTERS!');
    }
    else {
        console.log(`Lives remaining: ${hangman.lives}`)
    }
}


//Function for guessing the letters
function guessLetter(letter){
    if(typeof letter == 'string'){
        letter = letter.toUpperCase();

        if(hangman.guessedLetters.includes(letter)){                                //If number has already been guessed, inform the user
            console.log(`You have already guessed the letter ${letter}`);
        }
        else{
            hangman.guessedLetters.push(letter);            

            if(hangman.word.includes(letter)){                       //If the letter is in our word...
                let index = [];
                
                for(let i = 0; i < hangman.word.length; i++){        //... display all instances on the letterBoard
                    if(hangman.word[i] == letter){
                        index.push(i);
                    }
                }
                for (i = 0; i < index.length; i++){
                    hangman.letterBoard[index[i]] = letter;
                }                
            }

            else{                                                   //If not, then update the pictureBoard
                hangman.lives--;
                if(hangman.lives == 8){
                    hangman.pictureBoard = [
                        [' ',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' ']];
                        
                }
                else if (hangman.lives == 7){
                    hangman.pictureBoard = [
                        [' ','_','_','_',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' ']];
                }
                else if (hangman.lives == 6){
                    hangman.pictureBoard = [
                        [' ','_','_','_',' ',' '],
                        ['|',' ',' ',' ','|',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' ']];
                }
                else if (hangman.lives == 5){
                    hangman.pictureBoard = [
                        [' ','_','_','_',' ',' '],
                        ['|',' ',' ',' ','|',' '],
                        ['|',' ',' ',' ','O',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' ']];
                }
                else if (hangman.lives == 4){
                    hangman.pictureBoard = [
                        [' ','_','_','_',' ',' '],
                        ['|',' ',' ',' ','|',' '],
                        ['|',' ',' ',' ','O',' '],
                        ['|',' ',' ',' ','|',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' ']];
                }
                else if (hangman.lives == 3){
                    hangman.pictureBoard = [
                        [' ','_','_','_',' ',' '],
                        ['|',' ',' ',' ','|',' '],
                        ['|',' ',' ',' ','O',' '],
                        ['|',' ',' ','/','|',' '],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' ']];
                }
                else if (hangman.lives == 2){
                    hangman.pictureBoard = [
                        [' ','_','_','_',' ',' '],
                        ['|',' ',' ',' ','|',' '],
                        ['|',' ',' ',' ','O',' '],
                        ['|',' ',' ','/','|','\\'],
                        ['|',' ',' ',' ',' ',' '],
                        ['|',' ',' ',' ',' ',' ']];
                }
                else if (hangman.lives == 1){
                    hangman.pictureBoard = [
                        [' ','_','_','_',' ',' '],
                        ['|',' ',' ',' ','|',' '],
                        ['|',' ',' ',' ','O',' '],
                        ['|',' ',' ','/','|','\\'],
                        ['|',' ',' ','/',' ',' '],
                        ['|',' ',' ',' ',' ',' ']];
                }
                else{
                    hangman.pictureBoard = [
                        [' ','_','_','_',' ',' '],
                        ['|',' ',' ',' ','|',' '],
                        ['|',' ',' ',' ','O',' '],
                        ['|',' ',' ','/','|','\\'],
                        ['|',' ',' ','/',' ','\\'],
                        ['|',' ',' ',' ',' ',' ']];
                }
            }
            displayBoards();
        }
    } 
    else{
        console.log('You must input a string')
    }
}


//User inputs via Command Line - there must be a better way to do this without nesting questions?

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Select a word to start: ', function (inputWord) {
    hangman.word = inputWord;
    rl.question('Guess the first letter ', function (guess1) {
        guessLetter(guess1);         

        rl.question('Next guess: ', function(guess2){
            guessLetter(guess2);
                        
            rl.question('ETC.', function (end) {
                rl.close();
            });
        });
    });
});

rl.on('close', function () {
  console.log('GAME OVER');
  process.exit(0);
});


/*
hangman.word = 'Ben';

guessLetter('b');
guessLetter('z');
guessLetter('x');
guessLetter('y');
guessLetter('w');
guessLetter('s');
guessLetter('t');
guessLetter('u');
guessLetter('v');
guessLetter('i');
*/
