function twoSum(nums: number[], target: number): number[] {

    let seen = new Map<number, number>();// number: index

    for (let i = 0; i < nums.length; i++) {
        let compNumber = target - nums[i]
        if (seen.has(compNumber)) {
            return [seen.get(compNumber)!, i]
        }
        seen.set(nums[i], i)
    }
    return []
}