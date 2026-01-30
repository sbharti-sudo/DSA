function subarraySum(nums: number[], k: number): number {
    const mp = new Map<number, number>() //prefix --> count
    let result = 0;
    let curSum = 0;
    mp.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        let key = curSum - k
        if (mp.has(key)) {
            result += mp.get(key)!;
        }

        mp.set(curSum, (mp.get(curSum) ?? 0) + 1)
    }
    return result

};
