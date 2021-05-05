/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        // this.game = new Game();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const loadPhrase = getRandomPhrase();
        const loadPhraseArray = loadPhrase.split('');
        for (let i = 0; i < loadPhraseArray.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = loadPhraseArray[i];
            if (loadPhraseArray[i] === ' ') {
                li.className = 'space';
            } else {
                li.classList.add('hide', 'letter', '[i]')
            }
            ul.appendChild(li);
        }

    }
}