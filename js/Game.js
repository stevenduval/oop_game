/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }
    startGame(){
        // get overlay
        const overlay = document.querySelector('#overlay');
        // set the gamePhrases
        const gamePhrases = ['JavaScript','I Love Coding','Treehouse','Techdegree','Objects are fun'];
        // hide overlay
        overlay.style.display = 'none';
        // for each of the items in the gamePhrase array above push it to the phrases property as a phrase object
        gamePhrases.forEach(phrase => this.phrases.push(new Phrase(phrase)));
        // call the getRandomPhrase method
        let returnPhrase = this.getRandomPhrase(); 
        // set activePhrase to the returned value
        this.activePhrase = returnPhrase;
        // pass to addPhraseToDisplay in phrase.js
        returnPhrase.addPhraseToDisplay(returnPhrase);
    }
    getRandomPhrase(){
        // generate a randomNumber 0-4
        const randomNumber = Math.floor(Math.random() * 4)
        // return random phrase back to the startGame method where it was called
        return this.phrases[randomNumber];
    }
    handleInteraction(e){
        // check if overlay is hidden
        const overlay = document.querySelector('#overlay').hasAttribute('style');
        // grab the active phrase
        const activePhrase = this.activePhrase.phrase;
        // pass the clicked/typed letter & activePhrase to checkLetter method in phrase.js
        const letterChecker = this.activePhrase.checkLetter(e, activePhrase);
        // create an array for all the keys on the screen will be looped through when a key is clicked or typed
        Array.from(document.querySelectorAll('.keyrow > .key'))
            .forEach(key => {
                // if key is not in phrase and is equal to current key and not disabled and the overlay is not present
                if (letterChecker === -1 && e === key.textContent && !key.hasAttribute('disabled') && overlay) {
                    key.classList.add('wrong');
                    key.style.cursor = 'default';
                    key.setAttribute('disabled', 'disabled');
                    this.removeLife();
                // if key is in phrase and is equal to current key andis not disabled and the overlay is not present
                } else if (letterChecker >= 0 && e === key.textContent && !key.hasAttribute('disabled') && overlay) {
                    key.classList.add('chosen');
                    key.style.cursor = 'default';
                    key.setAttribute('disabled', 'disabled');
                    // send letter to showMatchedLetter method in Phrase object
                    this.activePhrase.showMatchedLetter(e);
                    // check if win
                    this.checkForWin();
                }
            });  
    }
    removeLife(){
        // grab all of the heart images
        const lives = document.querySelectorAll(".tries img");
        // increment missed property by 1
        this.missed += 1;
        // change the hearts src to lost heart image
        lives[this.missed-1].setAttribute('src', 'images/lostHeart.png');
        // if missed qty is 5 end the game
        if (this.missed === 5) { this.gameOver('lose'); }
    }
    checkForWin(){
        // grab all of the letters that have a .show class
        const matchedLetters = document.querySelectorAll('.show');
        // grab the active phrase and replace all of the spaces to get accurate length
        const activePhrase = this.activePhrase.phrase.replace(/ /g, "");
        // if matchedLetters = activePhrase length then send win message to gameOver method
        if (matchedLetters.length === activePhrase.length) { this.gameOver('win')};
    }
    gameOver(gameStatus){
        // get overlay
        const overlay = document.querySelector('#overlay');
        // get reset button
        const button = document.querySelector('#btn__reset');
        // get h1 to store game message
        const gameMessage = document.querySelector('#game-over-message');
        
        //if gameStatus is equal to win
        if (gameStatus === 'win') {
            overlay.className = 'win';
            gameMessage.innerHTML = 'Congrats!  Want to play again? <br><br> <img src="images/homerhappy.gif" height="375">';
        }
        //if gameStatus is equal to lose
        if (gameStatus === 'lose') {
            overlay.className = 'lose';
            gameMessage.innerHTML = 'Better luck next time! <br><br> <img src="images/homer_disappear.gif">';
        }

        // remove phraseHunter text
        document.querySelector('.title').innerText= " ";
        // change button text to 'Play Again?'
        button.innerText = 'Play Again?';
        // remove style attribute from overlay
        overlay.removeAttribute('style');
        // clear phrase
        document.querySelector('#phrase ul').innerHTML = '';
        // reset hearts
        Array.from(document.querySelectorAll(".tries img"))
            .forEach(img => img.setAttribute('src', 'images/liveHeart.png'));
        // reset key classes
        Array.from(document.querySelectorAll('.keyrow > .key'))
            .forEach(key => {
                key.className = 'key'
                key.removeAttribute('style');
                key.removeAttribute('disabled');
            });
    }
 }