/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(phrase) {
        const addLetters = document.querySelector("#phrase ul");
        Array.from(phrase.phrase)
            .forEach(letter => {
                if (letter !== " "){
                    addLetters.insertAdjacentHTML('beforeend', `<li class="hide letter ${letter}">${letter}</li>`);
                } else { 
                    addLetters.insertAdjacentHTML('beforeend', `<li class="space"> </li>`);
                }
            }) 
    }
    checkLetter(){

    }
    showMatchedLetter(){
        
    }
 }