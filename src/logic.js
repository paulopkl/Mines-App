const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row, // row: row
                column, // column: column
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    });
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length
}