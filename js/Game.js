/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.overlay = document.getElementById('overlay');
        this.message = document.getElementById('game-over-message');
    }

    /**
    * Get phrases for use in game 
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {  
        const phraseArray = [
            "A dime a dozen",
            "My cup of tea",
            "Close but no cigar",
            "On cloud nine",
            "Happy as a clam",
            "A piece of cake",
            "Man of few words",
            "The plot thickens",
            "Benefit of the doubt",
            "Easy as pie"
        ];  
        return phraseArray.map(phrase => new Phrase(phrase));
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        this.overlay.style.display = 'none';
        this.overlay.classList.remove('win', 'lose');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(button) {
        const currentLetter = button.textContent;
        button.disabled = true;
        if (this.activePhrase.checkLetter(currentLetter)) {
            button.classList.add('chosen', 'animate__animated', 'animate__pulse');
            this.activePhrase.showMatchedLetter(currentLetter);
            this.gameOver(this.checkForWin());
        } else {
            button.classList.add('wrong', 'animate__animated', 'animate__headShake');
            this.removeLife();
        }
    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won 
    */
    checkForWin() {
        let result = 0;
        const phraseLi = document.querySelectorAll('#phrase ul li');
        for (let i = 0; i < phraseLi.length; i++) {
            if (phraseLi[i].classList.contains('hide')) {
                result += 1;
            } 
        }
        return result > 0 ? false : true;
        // if (result > 0) {
        //     return false;
        // } else if (result === 0) {
        //     return true;
        // }
    }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        document.querySelectorAll('.tries img')[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 5) {
            this.overlay.style.display = 'flex';
            this.overlay.classList.remove('start');
            this.overlay.classList.add('lose');
            this.message.innerHTML = 'Sorry, better luck next time!';
            this.message.classList.add('animate__animated', 'animate__lightSpeedInLeft');
            this.resetGame();
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if (gameWon && this.missed < 5) {
            this.overlay.style.display = 'flex';
            this.overlay.classList.remove('start');
            this.overlay.classList.add('win');
            this.message.innerHTML = 'Congrats, you won!';
            this.message.classList.add('animate__animated', 'animate__lightSpeedInRight');
            this.resetGame();
        }
    }

    /**
     * Reset Game for a new game
     */
    resetGame() {
        const ul = document.querySelector('#phrase ul');
        // while loop from https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        const keys = document.querySelectorAll('.key');
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList.remove('chosen', 'wrong', 'animate__animated', 'animate__headShake', 'animate__pulse');
            keys[i].disabled = false;
        }
        this.missed = 0;
        document.querySelectorAll('.tries img').forEach(heart => heart.src = 'images/liveHeart.png');
    }
}