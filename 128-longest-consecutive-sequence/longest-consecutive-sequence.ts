function longestConsecutive(nums: number[]): number {
    let numSet = new Set<number>(nums)
    let longest = 0

    for (let n of numSet) {
        if (!numSet.has(n - 1)) {
            let current = n;
            let streak = 1;

            while (numSet.has(current + 1)) {
                current++;
                streak++;
            }
            longest = Math.max(longest, streak);
        }

    }
    return longest
};