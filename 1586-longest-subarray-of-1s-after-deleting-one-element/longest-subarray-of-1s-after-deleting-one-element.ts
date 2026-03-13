function longestSubarray(nums: number[]): number {
    let i = 0; // move only when we have two zeros in the window 
    let j = 0; // keeping moving
    let n = nums.length;
    let lastIndexOfZero = -1;
    let result = 0;

    while (j < n) {
        if (nums[j] === 0) {
            i = lastIndexOfZero + 1 // found second zero  so now reduce the window after last zero was found so that onlu one zero remain in the window
            lastIndexOfZero = j; // now zero found is at jth position so now lastIndexofZero becomes j 

        }

        result = Math.max(result, j - i) //  usually window in sliding window calculated by j -i +1 and her we have delete one element  so j - i +1 -1
        j++
    }

    return result

};