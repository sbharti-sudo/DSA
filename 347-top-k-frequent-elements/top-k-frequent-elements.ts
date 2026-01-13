function topKFrequent(nums: number[], k: number): number[] {

    let freqMap: Record<number, number> = {};

    for (let i = 0; i <= nums.length; i++) {
        freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1
    }

    let bucket: number[][] = Array(nums.length + 1).fill(null).map(() => []);

    for (let numStr in freqMap) {
        let freq = freqMap[numStr];
        bucket[freq].push(Number(numStr))
    }
    const result: number[] = [];
      for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of bucket[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result

};