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
        // grab overlay element
        const hideOverlay = document.querySelector('#overlay');
        // set the gamePhrases
        const gamePhrases = ['JavaScript','I Love Coding','Treehouse','Techdegree','Objects are fun'];
        // hide overlay
        hideOverlay.style.display = 'none';
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
        console.log(e.target);         
    }
    removeLife(){

    }
    checkForWin(){

    }
    gameOver(){
        
    }
 }