/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // global variable to select start game button
const startGame = document.querySelector('#btn__reset');
// global variable to select keys on the screen
const gameKeys = document.querySelector('#qwerty');
// regex to make sure the key that is pressed is a-z
const keyDownCheck = new RegExp(/[a-z]/);
//  global variable to store new game object in
let newGame;

// add click listener to start button
startGame.addEventListener('click', () => {
    // set newGame to a Game Object
    newGame = new Game();
    // trigger startGame method on Game Object
    newGame.startGame();
    // add keydown listener to window when start button is clicked
    window.addEventListener('keydown', (e) => {
        // check key press against regex and make sure its single that is pressed only
        if (keyDownCheck.test(e.key.toLowerCase()) && e.key.length === 1) {
            // send pressed key to handleInteraction method in Game Object
            newGame.handleInteraction(e.key.toLowerCase());
        }
    });
});

// add click listener to the keys on the screen
gameKeys.addEventListener('click', (e) => {
    // check if click is on a button
    if (e.target.tagName === 'BUTTON') {
        // send the text content of button to handleInteraction method in Game Object
        newGame.handleInteraction(e.target.textContent);
    }
});
 
