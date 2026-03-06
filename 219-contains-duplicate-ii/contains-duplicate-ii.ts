function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // sliding window approach
    let n = nums.length;
    let i = 0;
    let j = 0;

    let st: Set<number> = new Set();

    while (j < n) {
        if (Math.abs(i - j) > k) { // opposite of abs(i - j) <= k.
            st.delete(nums[i]);
            i++;
        }
        // checke if dukplicate exists
        if (st.has(nums[j])) {
            return true
        }
        st.add(nums[j])
        j++
    }
    return false
};