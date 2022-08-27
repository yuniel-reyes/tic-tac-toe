## Functional Requirements
*Hint: - If you only ever need ONE of something (gameboard, 
      displayController), use a module
       - If you need multiples of something (players),
      create them with factories.

`I. Gameboard`
1. Create a module to store the gameboard
- Let's make the object public for now 
- Let's add a ? sign and mark each cell
  - Each ? sign will correspond to an array index
  that will be connected to the gameboard on the page  


`II. Display/Renders board`
2. Creates a module that add:
a) get the grid-container reference once and for all
b) define the GRID SIZE
c) create `checkPlayer` (see `f`):
  - update array
      - when currentPlayer clicks on board, checkPlayer checks if there is 
        already a mark in the corresponding spot.
      - the spot is verify comparing array index and dataset value
  - update Board on page
  - change the currentPlayer
d) a function that renders the gameboard grid on the page
  - add two attributes to each div element: a class and a data-*
    (the data-* attr will allow me to track clicked div)
e) create a function that populate the gameboard with the
content of the array
f) add an event listener to each gameboard grid call `checkPlayer()` (see `c`)
g) a function that checks winner or tie. That function can be called inside
`updateArray()`
  - if winner remove event listener from each div
  - print each item in array 
  - Patterns: 
    [0]  [1]  [2]
    [3]  [4]  [5]
    [6]  [7]  [8] 

     [0]  [1]  [2]      [3]  [4]  [5]       [6]  [7]  [8] 
     X|0  X|0  X|0      X|0  X|0  X|0       X|0  X|0  X|0

     [0] X|0        [1] X|0          [2] X|0             
     [3] X|0        [4] X|0          [5] X|0 
     [6] X|0        [7] X|0          [8] X|0

     [0] X|0                               [2]  X|0
        [4] X|0                         [4]  X|0
           [8] X|0                   [6]  X|0
     
     - Understand the problem:
       - Restate: Problem: Given 9 X and 0 in a set of 5 and 4 (X and 0, depending on the first player), create a program that checks for 1 of 8 
     possible consecutive combination of index and values:
       - Test cases:
               ["X", "0", "X", 
                 "?", "X", "?", 
                 "X", "?",  "0"];
 
       - Questions: 
          Goals: Check for any of the possible index-values combination
          Input: X, 0, or ?  ==>    
          Output: Winner == combination  | Tie !== no combination
     - **Solutions** (hight abstract)
         - Create a array that contains multiple arrays each one with
           a possible winner combination:
           const winners = 
                 [[0, 1, 2],
                 [3, 4, 5],
                 [6, 7, 8],
                 [0, 3, 6],
                 [1, 4, 7],
                 [2, 5, 8],
                 [0, 4, 8],
                 [2, 4, 6]];
            
          - Create a function that goes through both arrays 
            checking each possible winner case against the
            array formed with the user input. The function will
            check for a tie too.
            - Iterate over winner array: check for winners
              - create variables:
                - tempFirst: mark to be checked in the winner array
                - counter: count number of checked winner marks. If 3, winner.
                - eachCellCounter: if not winner, check every cell
                  for 0 or X, and declare tie.
              - The functions check for any ? mark in the winner array. If there, that array is not a winner. 
                It clears the corresponding variables and breaks the iteration over that winner-array.
              - It breaks too if the next mark is not the tempFirst
                It clears the corresponding variable.
              - It checks if the counter == 2, as this means we have a winner. 
              - It increase the counter if none of the break cases rises.
            - Iterate over the array created with the user input: no winners. Tie.

f) Add the functionalities to restart the game:
  - clear every cell of the board
  - clear the array that stores the user input
  - Reset the game to the first player



`III. Players`
3. Create a factory function that return a player (see *hint)
- Create two players and a current player
- each player should have:
  - an id
  - its own mark (X or 0)
So create function `addMark()`. When click:
  - pass event object to addMark method
  - add mark to element
  - call `updateArray()` from Gameboard
    - check dataset attribute
    - add 0 or X to corresponding index of array



`IV. Game flow`
4. Create an object to control the flow of the game
- The Game module will:
  - instantiate both players
  - call the init method of the displayBoard module
  - Put every encapsulated functionality (Player, 
  displayBoard) inside the Game module.



(?) When rendering the board and adding the 
event listener, as per your design you are only 
adding an event listener for the currentPlayer. When
running the program for the first time, the 
currentPlayer will be player1. So how do you
update the current player for every click event?
The event handler is added only once, because the 
board is created once for all.
So you need to create a function that check the 
currentPlayer, change it and return it

(?) How to change from one player to other
Create a currentPlayer variable inside the Game module
Each player has an id
When player1 play, change current player to player2
**See IV.**  




## Non functional Requirements
1. Set up the HTML to display the gameboard
2. Set up the CSS to display the gameboard
3. Remove the borders of the cells and make them look
