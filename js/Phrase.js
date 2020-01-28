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
    checkLetter(clickedLetter, activePhrase){
        // check to see if the clickedLetter is in the activePhrase
        return activePhrase.indexOf(clickedLetter);
    }
    showMatchedLetter(clickedLetter){
        const matchedLetter = document.querySelectorAll(`.hide.letter.${clickedLetter}`);
        console.log(matchedLetter);
        Array.from(matchedLetter)
            .forEach(match => match.className = "show");
        
    }
 }