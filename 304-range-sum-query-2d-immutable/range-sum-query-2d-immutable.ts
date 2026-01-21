class NumMatrix {
    private prefix: number[][]
    constructor(matrix: number[][]) {
        const m = matrix.length;
        const n = m > 0 ? matrix[0].length : 0;

        if (m === 0 || n === 0) {
            this.prefix = [];
            return;
        }
        this.prefix = Array.from({ length: m }, () => Array<number>(n).fill(0))

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const top = i > 0 ? this.prefix[i - 1][j] : 0;
                const left = j > 0 ? this.prefix[i][j - 1] : 0;
                const topLeft = i > 0 && j > 0 ? this.prefix[i - 1][j - 1] : 0

                this.prefix[i][j] = matrix[i][j] + top + left - topLeft;
            }
        }

    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {

        if (this.prefix.length === 0) return 0;

        const total = this.prefix[row2][col2];
        const top = row1 > 0 ? this.prefix[row1 - 1][col2] : 0;
        const left = col1 > 0 ? this.prefix[row2][col1 - 1] : 0;
        const topLeft = row1 > 0 && col1 > 0 ? this.prefix[row1 - 1][col1 - 1] : 0;

        return total - top - left + topLeft;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */