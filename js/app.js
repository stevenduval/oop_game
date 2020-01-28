/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGame= document.querySelector('#btn__reset');
const gameKeys = document.querySelector('#qwerty');
let newGame;

startGame.addEventListener('click', () => {
    newGame = new Game();
    newGame.startGame();
});

gameKeys.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
    newGame.handleInteraction();   
    console.log(e.target);
    }
});

