function twoSum(nums: number[], target: number): number[] {

    const seen = new Map<number, number>();// number -> index

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];

        if (seen.has(compliment)) {
            return [seen.get(compliment)!, i]
        }

        seen.set(nums[i], i);
    }
    return []
}