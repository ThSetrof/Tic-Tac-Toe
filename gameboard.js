const Gameboard = (function(){
    const board = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']]
    const MIN_MOVES_BEFORE_CHECK = 4
    const movesCount = 0
    
    function getBoard(){
        return board
    }

    function setPieceAt(piece, i , j){
        board[i][j] = piece
    }
    
    function clear(){
        board[0] = [' ', ' ', ' ']
        board[1] = [' ', ' ', ' ']
        board[2] = [' ', ' ', ' '] 
    }

    function canSetPieceAt(i , j){
        return board[i][j] === ' '
    }

    function isThreeInARow(piece, x, y){
        const rowCount = board[x].reduce((total, p) => {
            if(p === piece){
                return total += 1
            }
            return total
        }, 0)

        const colCount = board.reduce((total, row) => {
            if(row[y] === piece) return total += 1
            return total
        }, 0)
        
        const diag = board[1][1] != ' ' &&
                    ((board[1][1] === board[2][2] && board[2][2]=== board[0][0]) ||
                    (board[2][0] === board[1][1] && board[0][2] === board[1][1]))
        

        return rowCount == 3 || colCount == 3 || diag
        
    }


    return{
        getBoard,
        setPieceAt,
        clear,
        canSetPieceAt,
        isThreeInARow
    }


})()