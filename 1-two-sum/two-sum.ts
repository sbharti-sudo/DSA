function twoSum(nums: number[], target: number): number[] {

    const seen: Record<string, number> = {}

    for (let i = 0; nums.length; i++) {
       let complement = target - nums[i];

        if (seen[complement] !== undefined) {
            return [seen[complement], i]
        }
        seen[nums[i]] = i
    }
    return []

};