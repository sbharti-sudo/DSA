function maxSubArray(nums: number[]): number {
    let maxSumEndingHere = nums[0];
    let maxSumSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        //Two option create new array with current number or add the current number to existing array
        maxSumEndingHere = Math.max(nums[i], maxSumEndingHere + nums[i])
        // maximum sum in entire journey
        maxSumSoFar = Math.max(maxSumSoFar, maxSumEndingHere)
    }
    return maxSumSoFar
};