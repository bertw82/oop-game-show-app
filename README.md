# oop-game-show-app
 Object oriented programming game show app

In this project I used object oriented JavaScript programming to create a game show app where a user tries to guess a phrase using a keyboard on the website, or their own keyboard. The user has 5 "lives" and loses a life each time they guess incorrectly. Once all 5 lives are exhausted the user loses the game. If the user guesses correctly the entire phrase before their lives run out, they win the game. 

I created two classes, a Game class and a Phrase class, and handled game interaction in my app.js file. The Game class contains several methods which create phrases, choose a random phrase, start the game, handle interaction (this method is called in the app.js file), check for a win, remove a life, display a win or lose screen, and reset the game. The Phrase class contains several methods which add a phrase to the display, check a letter that is clicked to see if it matches a letter in the phrase, and shows the matched letter in the display. 

The app.js file contains several addEventListeners which call other methods and also have additional code to handle game interaction. Specifically, there is an option to listen to keyboard "keydown" events to play the game. 

The game is also styled with some additional styles from animate.css to add to the user experience.

