function numSubseq(nums: number[], target: number): number {
    let MOD = 1_000_000_007
    const n = nums.length;
    nums.sort((a, b) => a - b);

    let pow2 = new Array<number>(n).fill(0);
    pow2[0] = 1

    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD; //   need precomputed value of power as it using build in function exceeds time limit
    }

    let l = 0;
    let r = n - 1
    let result = 0

    while (l <= r) {
        if (nums[l] + nums[r] <= target) {
            result = (result + pow2[r - l]) % MOD; // between l and r there can c to power (r-l) ways to make a sequence (either we include number in the sequence or not)
            l++ /* keep the min fix and look for maximum from last, if it satifyied that mean all the sequence with that min has been achived moved to next min. if 
            it exceeds the target  that meaans we have reduce r  to make the value smaller so that it can be less than or equal to target as the array is sorted
            */
        } else {
            r--
        }

    }
    return result
};