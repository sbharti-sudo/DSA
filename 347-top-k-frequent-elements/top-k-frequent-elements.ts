function topKFrequent(nums: number[], k: number): number[] {
    let frequency: Record<number, number> = {};
    let n = nums.length;


    for (let i = 0; i < n; i++) {
        frequency[nums[i]] = (frequency[nums[i]] ?? 0) + 1; // { 1: 3, 2: 2, 3: 1 }
    }

    let buckets: number[][] = Array.from({ length: n + 1 }, () => []) // index is frequency values will elemst haveing that frequency

    for (const [key, values] of Object.entries(frequency)) {
        buckets[values].push(Number(key)) // js silently converst key into string
    }
    let result: number[] = []
    for (let freq = n; freq >= 1 && result.length < k; freq--) {
        for (const num of buckets[freq]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;

};