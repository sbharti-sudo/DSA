function removeDuplicates(nums: number[]): number {
    let n = nums.length
    if (n === 0) return 0

    let i = 0; // will store the unique element
    let j = 1; // j will traverse to look for unique elements

    while (j < n) {
        if (nums[i] !== nums[j]) {// got a unique element {
            i++; // make space at ith place for jth element
            nums[i] = nums[j];
        }
        j++; // will move forward to find unique elements
    }
    return i + 1; // position of i plus1 as array start from zeroth index
};