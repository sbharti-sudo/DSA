function missingNumber(nums: number[]): number {
    let n = nums.length
    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        actualSum = actualSum + nums[i]
    }

    return expectedSum - actualSum
};