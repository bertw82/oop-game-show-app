/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const loadPhrase = this.phrase;
        const loadPhraseArray = loadPhrase.split('');
        for (let i = 0; i < loadPhraseArray.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = loadPhraseArray[i];
            if (loadPhraseArray[i] === ' ') {
                li.className = 'space';
            } else {
                li.classList.add('hide', 'letter', loadPhraseArray[i])
            }
            ul.appendChild(li);
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const currentPhrase = this.phrase;
        const currentPhraseArray = currentPhrase.split('');
        const result = currentPhraseArray.filter(char => char === letter);
        if (result.length > 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        if (this.checkLetter(letter)) {
            console.log('hello');
            const phraseLi = document.querySelectorAll('#phrase ul li');
            for (let i = 0; i < phraseLi.length; i++) {
                if (phraseLi[i].classList.contains(letter)){
                    phraseLi[i].classList.remove('hide');
                    phraseLi[i].classList.add('show');
                }
            }
        }
    }
};
