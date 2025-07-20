/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

    let insertPosition = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPosition] = nums[i];
            insertPosition++
        }
    }

    while (insertPosition < nums.length) {
        nums[insertPosition] = 0;
        insertPosition++;

    }

};