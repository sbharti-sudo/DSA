function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    // 1) Count frequencies
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        freqMap.set(x, (freqMap.get(x) ?? 0) + 1);
    }

    // 2) Bucket array where index = frequency
    const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);

    // 3) Put numbers into buckets by frequency
    for (const [num, freq] of freqMap) {
        bucket[freq].push(num);
    }

    // 4) Collect from highest frequency to lowest until we have k
    const result: number[] = [];
    for (let f = bucket.length - 1; f >= 0 && result.length < k; f--) {
        for (const num of bucket[f]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}