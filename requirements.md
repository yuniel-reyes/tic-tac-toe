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
- a function that renders the gameboard grid on the page
  - add two attributes to each div element: a class and a data-*
    (the data-* attr will allow me to track clicked div)
- create a function that populate the gameboard with the
content of the array
- 

`III. Players`
2. Create a factory function that return a player (see *hint)
- Create two players
- each player should:
  - have an id
  - be able to click on the board and adds its mark
    - create function `addMark()` --when click:
      - add mark to the page
  - 

  Let's assign a default mark for now


`IV. Game flow`
3. Create an object to control the flow of the game
- The Game module will:
  - start the 



## Non functional Requirements
1. Set up the HTML to display the gameboard
2. Set up the CSS to display the gameboard