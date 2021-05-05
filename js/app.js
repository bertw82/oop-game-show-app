/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

const phrase = new Phrase('life is like chocolate');
const phrase1 = new Phrase('hey there');
const phrase2 = new Phrase('blh blh blh');

const newphrasearray = [phrase, phrase1, phrase2];
console.log(newphrasearray);

newphrasearray.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
    });
const win = new Game();
console.log(win.phrases);