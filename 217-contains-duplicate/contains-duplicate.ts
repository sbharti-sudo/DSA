function containsDuplicate(nums: number[]): boolean {
    let numsSet = new Set();
    for(let i = 0; i < nums.length; i++){
        if(numsSet.has(nums[i])){
            return true;
        }
        else{
            numsSet.add(nums[i])
        }
      
    }
       return false
}
   