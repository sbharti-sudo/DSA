function fourSum(nums: number[], target: number): number[][] {
    let result: number[][] = [];
    let n = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n;) {
            let p = j + 1;
            let q = n - 1;

            while (p < q) {
                let sum = nums[i] + nums[j] + nums[p] + nums[q];

                if (sum < target) {
                    p++;
                } else if (sum > target) {
                    q--;
                } else {
                    result.push([nums[i], nums[j], nums[p], nums[q]]);
                    p++;
                    q--;
                    while (p < q && nums[p] === nums[p - 1]) p++;
                }
            }

            j++; // at least one time j loop has to run for a distinct i
            while (j < n && nums[j] === nums[j - 1]) j++;
        }
    }

    return result;
}
