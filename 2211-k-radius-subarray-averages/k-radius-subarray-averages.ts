function getAverages(nums: number[], k: number): number[] {

    let left = 0
    let right = 2 * k;
    let i = k
    let windowSum = 0

    let result = new Array(nums.length).fill(-1);

    if (k === 0) {
        return nums;
    }

    if (nums.length < 2 * k + 1) {
        return result;
    }
    // calculate the sum for the window
    for (let j = left; j <= right; j++) {
        windowSum += nums[j];
    }
    // this calculation for first ith value
    result[i] = Math.floor(windowSum / (2 * k + 1));
    right++;
    i++;
    // moving forward with i +1  - sliding window phase
    while (right < nums.length) {
        let newNumAddedToWindow = nums[right];
        let numRemovedFromWindow = nums[left];
        windowSum = windowSum + newNumAddedToWindow - numRemovedFromWindow
        result[i] = Math.floor(windowSum / (2 * k + 1));
        right++;
        i++;
        left++;
    }
    return result
};