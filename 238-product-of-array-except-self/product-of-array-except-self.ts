function productExceptSelf(nums: number[]): number[] {
    let numsLength = nums.length;
    const left = new Array<number>(numsLength).fill(1); // fill one because product of nums[0] is 1; nothing on the left of nums[0]
    const right = new Array<number>(numsLength).fill(1);
    const result = new Array<number>(numsLength).fill(1);
    for (let i = 1; i < numsLength; i++) {
        left[i] = left[i - 1] * nums[i - 1]// nums[i-1] number just before i multiplied by product of all number combined in the left of i
    }
    // starting from numsLength-2 because there will 1 stored as  last number as there is nothing in the right of last number
    for (let i = numsLength - 2; i >= 0; i--) {
        right[i] = right[i+1] * nums[i+1]
    }
    for (let i = 0; i < numsLength; i++) {
        result[i] = right[i] * left[i]
    }
    return result
};

/*
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array<number>(n).fill(1);

  // 1) result[i] = product of all elements to the LEFT of i
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // 2) Multiply by product of all elements to the RIGHT of i
  let rightProduct = 1; // nothing to the right of last element
  for (let i = n - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];   // build right product as we move left
    result[i] *= rightProduct;     // combine left (already in result) with right
  }

  return result;
}

*/