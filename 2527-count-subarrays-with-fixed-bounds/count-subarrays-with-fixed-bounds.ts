function countSubarrays(nums: number[], minK: number, maxK: number): number {

    let minIndex = -1 ; 
    let maxIndex = -1;
    let culpritIndex = -1 // range of this element would be out of range of minK and maxk
    let ans = 0;
// valid  no of subarray  which ends at ith position
    for(let i = 0; i < nums.length; i++) {

        if(nums[i] < minK || nums[i] > maxK){
            culpritIndex = i;
        }
        if(nums[i] === minK){
            minIndex = i;
        }
        if(nums[i] === maxK){
            maxIndex = i
        }
        let smaller = Math.min(minIndex,maxIndex);  //have to  find the minimum position  where we get both min value and max value 
        let temp = smaller - culpritIndex;
         ans +=  temp <=0 ? 0 :temp;
    }
    
     return ans
};