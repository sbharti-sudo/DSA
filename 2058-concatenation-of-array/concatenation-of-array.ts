function getConcatenation(nums: number[]): number[] {
    let numsLength = nums.length;
    let concatinatedArray = new Array(2*numsLength)
    for(let i = 0; i < nums.length; i++) {
        concatinatedArray[i] = nums[i]
        concatinatedArray[i + numsLength] = nums[i]
    } 
    return concatinatedArray;
};