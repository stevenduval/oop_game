/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(phrase) {
        // grab the area to insert <li> for each phrase letter
        const addLetters = document.querySelector("#phrase ul");
         // create an array from the phrase so we can loop through it
        Array.from(phrase.phrase)
            // for each letter create <li> with letter in it if not a space, if space create space <li>
            .forEach(letter => {
                if (letter !== " "){
                    addLetters.insertAdjacentHTML('beforeend', `<li class="hide letter ${letter}">${letter}</li>`);
                } else { 
                    addLetters.insertAdjacentHTML('beforeend', `<li class="space"> </li>`);
                }
            }) 
    }
    checkLetter(enteredLetter, activePhrase){
        // check to see if the enteredLetter is in the activePhrase
        return activePhrase.indexOf(enteredLetter);
    }
    showMatchedLetter(enteredLetter){
        // create an array of the letters on the screen and show them
        Array.from(document.querySelectorAll(`.hide.letter.${enteredLetter}`))
            .forEach(match => match.className = "show");
        
    }
 }