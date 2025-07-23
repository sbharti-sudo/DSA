function twoSum(nums: number[], target: number): number[] {
    const mapRecord: Record<number, number> = {} // stores number and there indices

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i] //  diff required  to be added to nums[i] to make  target
        if (mapRecord[diff] !== undefined) {
            return [mapRecord[diff], i]
        }
        mapRecord[nums[i]] = i;
    }
    return []
};