function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];

    function twoSum(target: number, i: number, j: number): void {
        while (i < j) {
            if (nums[i] + nums[j] > target) {
                j--
            } else if (nums[i] + nums[j] < target) {
                i++
            } else {
                result.push([-target, nums[i], nums[j]]);
                i++;
                j--;
                while (i < j && nums[i] === nums[i - 1]) i++;
                while (i < j && nums[j] == - nums[j + 1]) j++;

            }
        }
    }

    const n = nums.length;
    if (n < 3) return [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let n1 = nums[i];
        let target = - n1;
        twoSum(target, i + 1, n - 1)
    }
    return result;
};