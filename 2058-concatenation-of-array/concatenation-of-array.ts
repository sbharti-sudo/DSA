function getConcatenation(nums: number[]): number[] {
    let k = nums.length;
    let result: number[] = new Array(k*2);
    for(let i = 0 ; i < k ; i++){
        result[i] = nums[i];
        result[i+k] = nums[i];
    }
    return result;
};