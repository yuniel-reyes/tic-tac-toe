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
        return;
    }

    const checkWinner = () => {
        // winner patterns
        
    }


    const _renderBoard = (gridContainer, checkPlayer) => {
        for (let gridCounter = 0; gridCounter < _GRID_SIZE; gridCounter++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'child');
            div.setAttribute('data-cell', gridCounter);
            div.addEventListener('click', checkPlayer);
            gridContainer.appendChild(div);
        }
    }

    
/*     const _populateBoard = (gridContainer) => {
        const arrFromCollection = Array.from(gridContainer.children);
        arrFromCollection.forEach((div, indexOfDiv) => {
            GameBoard.gameBoard.forEach((item, indexOfItem) => {
                if (item !== "?") {
                    div.textContent = item;
                }
            })
        });
    };
 */
    _renderBoard(gridContainer, checkPlayer);


    })();
})();

