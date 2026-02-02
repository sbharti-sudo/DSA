function isValidSudoku(board: string[][]): boolean {

    let seen = new Set<string>();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j]
            if (val === ".") continue
            // for each value we create this three strings below
            let rowKey = `${val}_ROW_${i}`;
            let colKey = `${val}_COL_${j}`;
            let boxKey = `${val}_BOX_${Math.floor(i / 3)}_${Math.floor(j / 3)}`; // any value in the 3 by 3 box divided by 3 will give same val.
            // for each value first check if the strings that we created for this value already exist in see set. if not store those three strings for each value.
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