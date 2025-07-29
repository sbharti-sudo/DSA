function majorityElement(nums: number[]): number {
    let targetElement = nums[0];
    let count = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === targetElement) {
            count++
        } else {
            count--
            if (count === 0) {
                targetElement = nums[i];
                count = 1
            }

        }
    }
    return targetElement;
};