function twoSum(nums: number[], target: number): number[] {
    const mapCount:Record<number,number> = {};
    for(let i = 0; i<nums.length; i++){
        const diff = target - nums[i]
        if(mapCount[diff]!== undefined){
            return [mapCount[diff], i]
        }
        mapCount[nums[i]] = i;
    }
    return []
};