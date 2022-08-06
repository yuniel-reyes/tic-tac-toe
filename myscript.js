const PageBoard = (function(){

    // Store 
    const _GameBoard = {
        gameBoard: [],
    }

    const gridContainer = document.getElementById('grid-container');

    const _GRID_SIZE = 9;

    const init = () => {
        // _checkCacheDom();
        _renderBoardGrid(gridContainer);
        _populateBoard();
    }
    
    const _populateBoard = () => {
        const eachDiv = gridContainer.children;
        const TicTac = "X"
        for (divNum = 0; divNum < eachDiv.length; divNum++) {
            _GameBoard.gameBoard.push(TicTac)
            eachDiv[divNum].textContent = TicTac;
        }
    };
    
    const _checkCacheDom = () => {
        gridContainer.textContent = "Hello World";
    };

    const _renderBoardGrid = (gridContainer) => {
        for (let gridCounter = 1; gridCounter <= _GRID_SIZE; gridCounter++){
            const div = document.createElement('div');
            div.setAttribute('class', 'child')
            gridContainer.appendChild(div);
        }
    };

    init();

    return {
        _GameBoard,
    };

})();


