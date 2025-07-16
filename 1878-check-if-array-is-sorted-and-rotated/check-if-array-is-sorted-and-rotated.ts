function check(nums: number[]): boolean {
    let drop = 0;
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] > (nums[(i + 1) % nums.length])){
            drop++
        }
    }
    return drop<=1
};