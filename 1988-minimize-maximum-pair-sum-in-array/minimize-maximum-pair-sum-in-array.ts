function minPairSum(nums: number[]): number {

    // same as boats to save people

    /* logic : pair up the largest element with smallest so that we get  minimum mximum, if we pair the largest number with not the smallest one we will get larger sum
    [3,5,2,3]  one pair {[5,3] [3,2] : max is 8}
    [ {5,2} {3,3} max: 5 , min :2 --  so the result is 7  to make this possible we sort the array.

     */

    nums.sort((a, b) => a - b)
    let n = nums.length;
    let l = 0;
    let r = n - 1

    let result = 0

    while (l < n) {
        let sum = nums[l] + nums[r];
        result = Math.max(result, sum)
        l++
        r--
    }

    return result
};