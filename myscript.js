// Module for Game flow
const Game = (() => {

    // Module Pattern for Gameboard  
    const GameBoard = (() => {
        
        return {
            gameBoard: ["?", "?", "?",
                        "?", "?", "?",
                        "?", "?", "?"],  
        }

    })();

    // =================================

    // Factory function for players
    const Players = (id, mark) => {
        id = id;
        mark = mark;
    
        return {
            mark,
        }
};

    // Create players
    const player1 = Players(1, "X");
    const player2 = Players(2, "0");

    // Check and change player
    let currentPlayer = player1;

    // =================================

    // Module Pattern to render the board
    const displayBoard = (() => {

    const gridContainer = document.getElementById('grid-container');
    const _GRID_SIZE = 9;
    // Create pattern array
    const winners = [[0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]];

    //  Add mark to a particular spot in the gameboard array
    const checkPlayer = (e) => {
        
        // update array
        updateArray(e);
        // update board on page
        updatePageBoard(e);
        // change currentPlayer for every click
        currentPlayer = currentPlayer == player1 ? player2 : player1;
        // check winner
        checkWinner();        
    }

    const updatePageBoard = (e) => {
        // update board on page
        // check if that spot is empty
        if (e.target.textContent === "") {
            e.target.textContent = currentPlayer.mark;
        }
        return;
    }


    const updateArray = (e) => {
        // check spot in the array and update if empty
        if (GameBoard.gameBoard[e.target.dataset.cell] === "?") {
            GameBoard.gameBoard[e.target.dataset.cell] = currentPlayer.mark;
        }
        // console.table(GameBoard.gameBoard);
        return;
    }

    const checkWinner = () => {
        let tempFirst = "";
        let counter = 0;
        let eachCellCounter = 0;
    
        winners.forEach(eachArray => {
            tempFirst = GameBoard.gameBoard[eachArray[0]];
            // console.log(`${eachArray[0]}: ${caseArr[eachArray[0]]}`);
            for (eachItem of eachArray) {
                if (GameBoard.gameBoard[eachItem] == "?") {
                    tempFirst = "";
                    counter = 0;
                    break;
                }
                if (tempFirst !== GameBoard.gameBoard[eachArray[counter]]) {
                    counter = 0;
                    break;
                }
                if (counter == 2) {
                    return console.log(`The winner is ${GameBoard.gameBoard[eachItem]}`);
                }
                counter++;
            }
        });
        // Check tie
        GameBoard.gameBoard.forEach(eachCell => {

            if (eachCell == "X" || eachCell == "0") {
                eachCellCounter++;
            }
            if (eachCellCounter == 9) {
                return console.log("Tie. There is not winner.");
            }
        })

    };


    const _renderBoard = (gridContainer, checkPlayer) => {
        for (let gridCounter = 0; gridCounter < _GRID_SIZE; gridCounter++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'child');
            div.setAttribute('data-cell', gridCounter);
            div.addEventListener('click', checkPlayer);
            gridContainer.appendChild(div);
        }
    }

        _renderBoard(gridContainer, checkPlayer);


    })();
})();

