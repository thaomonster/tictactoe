---
# Tic Tac Toe
###### Harry Potter inspired theme!
---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Authors](#authors)
* [Contributors](#contributors)


## Introduction
The primary goal of [Tic Tac Toe](https://github.com/thaomonster/tictactoe) is to have two players using one computer to play against one another. This project was created using JS, HTML, and CSS from a blank canvas.([Project Specs](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html)).

#### Motivation
The motivation behind this projects creation was to build an application that users can use to play Tic Tac Toe together, while we focused on writing DRY JS, HTML, CSS and solidifying good habits in git workflow.

---
## Features
* [Player Token](#Player-Token)
* [Winning Plays](#Winning-Play)
* [It's A Draw](#It's-A-Draw)
* [Game-Reset](#Game-Reset)
* [Continuous Improvement/Future Improvements](#Continuous-Improvement/Future-Improvements)

#### Player Token
Each player is assigned to a Token. Player one's token is Harry Potter, while Player Two's token is his arch nemesis Voldermont.

<details>
  <summary>**Under the Hood**</summary>
    In the player class we are passing through a parameter of token. We use that parameter as an argument when we instantiate our new player in our game class. Here we have our argument as an image path and from here we manipulate the DOM with innerHTML.
</details>

#### Winning Plays
There are seven different ways to win. You can win by having your token in a diagonal, filling up a row or column with three of your token. When there is a win the header will now show the winners token and Avada Kedavra (killing curse)!

<p align = "center">
<img src="https://media.giphy.com/media/gSJPHhlppkHhAAlcQx/giphy.gif">
</p>
      <details>
        <summary>**Under the Hood**</summary>
         There is an array for win combos in our game board. Within our game class there is a `checkForWin` function that uses a for loop and a nested for loop to iterate through the array of `winCombos` then another for loop to iterate through one specific array. Then assign vairables to grab the specific index and if all three matches the player id, it becomes a win and the header will toggle from current player to winner!
      </details> 

#### It's A Draw
If neither of the two players has a winning combo and the header will now change to say Expelliarmus which means that each player has diarmed each other and there is no winner.

<p align = "center">
<img src="https://media.giphy.com/media/xb3xhkLItiTdiAEYJZ/giphy.gif">
</p>

  <details>
  <summary>**Under the Hood**</summary>
    In the `checkForDraw` function in main.js, it is checking to see if the board includes an empty string and if it does do nothing else we toggle the header to say Expelliarmus and end the game with our `timeout` function.
  </details>

#### Game Reset
Once a game has been won or if it comes to a draw the page refreshes and a new game can begin.

<p align = "center">
<img src="https://media.giphy.com/media/KhbwSujOuUb7XukEaO/giphy.gif">
</p>

  <details>
    <summary>**Under the Hood**</summary>
     A `timeout` function is created that set's a timeout of 2000 milliseconds and once the time runs out it will run the `endGame` function which will reload/refresh the page.
  </details>


#### Continuous Improvement/Future Improvements
 In the next iteration we hope to add:
  * Be able to have either player starting the game.
  * Show an error message if a player clicks on a filled space
  * Add more animations for user fun!

---
## Technologies
JS, HTML & CSS

## Authors
<table>
    <tr>
        <td> Thao Ma <a href="https://github.com/thaomonster">GH</td>
    </tr>
    </tr>

<td><img src="https://avatars3.githubusercontent.com/u/67611512?s=400&u=ef3bac38d4f7d6d8a899d26ce1f0eb169f11bb9b&v=4" alt="Ms. Turtle"
 width="150" height="auto" /></td>
</table>

## Contributors
    Thank you for your contributions!
        
For his help and direction as a reviewer: <a href="https://github.com/geoff616">Geoff Wright</a>
