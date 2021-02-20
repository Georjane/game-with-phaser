# My Shooter Game with Phaser 3
In this project, I was asked to build a platform game such as the space shooter game. I designed a simple but creative game and implement it using Phaser. 
A user is able to search for a specific location's weather information and toggle displaying the data in Fahrenheit or Celsius.

## ShooterGame Screenshot
![](spaceshooter.png)

## Live Link
- [ShooterGame]()

## Built With
- Phaser 3
- Webpack
- HTML
- JavaScript

## Game Design Document
- We set up the basis for our scene files: SceneMainMenu.js, SceneMain.js, and SceneGameOver.js. We can run the game by navigating to localhost/(game folder name)/index.html.
The SceneMainMenu is a welcome page that displays the game title name and a button to start playing the game.
The SceneMain contains the logic of the game. It gives the player the ability to move up, down, left and right with the keyboard keys W, S, A and D respectively.
- We implemented a couple enemies and give them basic AI.
We have 3 types of enemies, the Chasership, Carriership, Gunship.
The Chasership chases after the player and you get a score of 100 per each Chaser ship. If this ship is not killed before it reaches you, you will be death upon collision in the game.
The Carriership just moves around but if you collide with it, you are dead in the game off course.
The Gunships are out for blood. They shoot mercilessly.


## Getting Started
To get a local copy of the repository please run the following commands on your terminal:
```
$ git clone https://github.com/Georjane/game-with-phaser.git
$ cd game-with-phaser
```
Then open index.html file


## Author

### 1. Witah Georjane
* Github: [@Georjane](https://github.com/Georjane)
* Twitter: [@WittyJany](https://twitter.com/WittyJany)
* LinkedIn: [Witah Georjane](https://www.linkedin.com/in/witah-georjane)

## Contributing
There are two ways of contributing to this project:

1. If you see something wrong or not working, please open the issue in issue section
2. If you see something to improve or to correct, and you have a solution to that, follow the below steps to contribute:
    1. Fork this repository
    2. Clone it on your local computer by running `git clone https://github.com/Georjane/game-with-phaser.git` __Replace *your username* with the username you use on github__
    3. Open the cloned repository which appears as a folder on your local computer with your favorite code editor
    4. Create a separate branch off the *master branch*,
    5. Write your codes which fix the issue you found
    6. Commit and push the branch you created
    7. Open a pull request, comparing your new created branch with our original master branch [here](https://github.com/Georjane/game-with-phaser/pulls)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgment
* [Microverse](https://www.microvese.org)
* [The Odin Project](https://www.theodinproject.com)