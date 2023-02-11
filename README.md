# Hangman

A web app to play hangman, made using React and Redux Toolkit.

## Project Description

This is a web app I made as part of the HyperionDev bootcamp, built using React and Redux Toolkit. 
It allows the user to play the classic hangman game online.

## Contents
* Installation
* How to Play
* Visual Instructions
* Credits


## Installation

Go to the green "Code" button and select "download Zip". Alternatively, use the git clone method which is also available via the green "Code" button.

Once you've unzipped the folder, move it to a convenient location on your local machine.

Open your terminal and navigate to the game folder (the one containing the package.json file).

Run `npm install`. This will replace the node packages that are needed for the game to run.

Once the folders are downloaded, run `npm start`. 

The app will now open in a new browser window, or you can navigate to it at [localhost:3000/](localhost:3000/).


## How to Play

The aim of the game is to guess the randomly generated word before the final image is displayed.

* To start, click the green "New Game" button.
* You can hide the instructions by pressing the "Hide Help" button in the top right hand corner. Click the button at any point to read the instructions again.
* You now have a row of underscores and a keyboard. Each underscore represents a letter in the unknown word.
* Guess a letter by clicking on a letter in the keyboard. 
* If your guess is correct, the key will turn green and the letter will take the place of one or more underscores.
* If you guess incorrectly, the key will turn red, and an image will appear above the word/underscores.
* You can have up to ten incorrect guesses, each shown by the image changing.
* You win if you fill in all the letters.
* You lose if you still have unknown letters remaining when the final image is shown.
* The results bar will tell you the unknown word if you lose!
* When the game is over, click the "New Game" button to start another. You can start a new game at any point.
* Enjoy!

## Visual Instructions

* The start screen: click the green "New Game" button and press the "Hide Help" button to hide the instructions.
![The start screen](https://images.squarespace-cdn.com/content/v1/5e0dc9494d4c716d3ff361ec/1676152743001-GETDT2YQOPZPF7WD6UL9/start-screen.png?format=1000w)

* The new game screen: the unknown word is represented by the underscores.
![The new game screen](https://images.squarespace-cdn.com/content/v1/5e0dc9494d4c716d3ff361ec/1676152733128-VI0BSA57YJBFPMYD3764/new-game.png?format=2500w)

* Guess a letter: if you guess correctly, the key will turn green and the letter will replace the underscore(s).
![Guess correctly](https://images.squarespace-cdn.com/content/v1/5e0dc9494d4c716d3ff361ec/1676152738496-13UY9RO5DOZRARJT4Q9G/correct-guess.png?format=2500w)

* Incorrect guess: otherwise, the key will turn red and the image will change.
![Guess incorrectly](https://images.squarespace-cdn.com/content/v1/5e0dc9494d4c716d3ff361ec/1676152740934-74XP0CN7F29CX1TYYVK0/red-letter.png?format=2500w)

* Winning conditions: if you guess every letter in the word, you win! The black bar will tell you so.
![You win](https://images.squarespace-cdn.com/content/v1/5e0dc9494d4c716d3ff361ec/1676152692472-ME28686TJK0UWO3RNYBJ/image-asset.png?format=2500w)

* Losing conditions: if you don't guess every letter in the word before the image reaches this sad point, you lose. 
![You lose](https://images.squarespace-cdn.com/content/v1/5e0dc9494d4c716d3ff361ec/1676152736173-38ECPO7OHR5UIAUO40RG/you-lose.png?format=2500w)

## Credits

I, [el-spook](https://github.com/el-spook), made this project on my own.


