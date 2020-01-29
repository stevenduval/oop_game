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
        // grab the active phrase
        const activePhrase = this.activePhrase.phrase;
        // pass the clicked/typed letter & activePhrase to checkLetter method in phrase.js
        const letterChecker = this.activePhrase.checkLetter(e, activePhrase);
        // create an array for all the keys on the screen will be looped through when a key is clicked or typed
        Array.from(document.querySelectorAll('.keyrow > .key'))
            .forEach(key => {
                // check if key is not in phrase
                if (letterChecker === -1 && e === key.textContent && !key.hasAttribute('disabled')) {
                    key.classList.add('wrong');
                    key.style.cursor = 'default';
                    key.setAttribute('disabled', 'disabled');
                    this.removeLife();
                // check if key is in phrase and find its key match in the array
                } else if (letterChecker >= 0 && e === key.textContent && !key.hasAttribute('disabled')) {
                    key.classList.add('chosen');
                    key.style.cursor = 'default';
                    key.setAttribute('disabled', 'disabled');
                    // send letter to showMatchedLetter method in Phrase object
                    this.activePhrase.showMatchedLetter(e);
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
        if (this.missed === 5) { this.gameOver('lost'); }
    }
    checkForWin(){

    }
    gameOver(gameStatus){
        // get overlay
        const overlay = document.querySelector('#overlay');
        // get button
        const button = document.querySelector('#btn__reset');



        if (gameStatus === 'lost') {
            overlay.className = 'lose';
            
        }

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