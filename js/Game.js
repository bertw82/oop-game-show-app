/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Get phrases for use in game from random phrase API: https://github.com/lukePeavey/quotable
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {  
        const phraseArray = [
            "A dime a dozen",
            "Back to square one",
            "Close but no cigar",
            "Fish out of water",
            "Happy as a clam"
        ];  
        return phraseArray.map(phrase => new Phrase(phrase));
        // let phraseArray = [];    
        // for (let i = 0; i < 5; i++) {
        // fetch('https://api.quotable.io/random?maxLength=30')
        //     .then(response => response.json())
        //     .then(data => {
        //         phraseArray.push(new Phrase(data.content));
        //     })
        //     .catch(error => console.log('Looks like there was a problem!', error))   
        // };
        //     return phraseArray;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase.phrase;
    };
}