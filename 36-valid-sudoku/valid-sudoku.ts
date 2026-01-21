function isValidSudoku(board: string[][]): boolean {

    let seen = new Set<string>();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j]
            if (val === ".") continue

            let rowKey = `${val}_ROW_${i}`;
            let colKey = `${val}_COL_${j}`;
            let boxKey = `${val}_BOX_${Math.floor(i / 3)}_${Math.floor(j / 3)}`;

            if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                return false
            }

            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }


    }
    return true

};