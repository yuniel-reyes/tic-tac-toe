// Module Pattern for Board  
const GameBoard = (function(){
    
    return {
        gameBoard: ["?", "?", "?",
                   "?", "?", "?",
                   "?", "?", "?"],  
    }

})();
// ================================

// Module Pattern to render the board
const displayBoard = (() => {

    const gridContainer = document.getElementById('grid-container');
    const _GRID_SIZE = 9;

    const init = (eachPlayer) => {
        _renderBoard(gridContainer, eachPlayer.addMark);
        // _populateBoard(gridContainer);
    };



    function _renderBoard(gridContainer, addMark) {
        for (let gridCounter = 0; gridCounter < _GRID_SIZE; gridCounter++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'child');
            div.setAttribute('data-cell', gridCounter);
            div.addEventListener('mouseover', addMark);
            gridContainer.appendChild(div);
        }
    }
    
    const _populateBoard = (gridContainer) => {
        const arrFromColl = Array.from(gridContainer.children);
        arrFromColl.forEach((div, indexOfDiv) => {
            GameBoard.gameBoard.forEach((item, indexOfItem) => {
                if (indexOfDiv == indexOfItem) {
                    div.textContent = item;
                }
            })
        });
    };

     
    return {
        init,
        // gridContainer,
    };

})();
// ====================
// ==========================================

// Factory function for players
const Players = (id, mark) => {
    id = id;
    mark = mark;

    const addMark = () => {
        console.log("It works")
    };
 
    return {
        addMark,
    }
};