function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let k = 1;// next unique element to be placed 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k;

};