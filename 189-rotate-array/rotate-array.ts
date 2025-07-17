/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n
    reverse(nums, 0, n - 1); // reverse the whole array 
    reverse(nums, 0, k - 1); // reverse the first k elements
    reverse(nums, k, n - 1) // reverse the rest


    function reverse(arr: number[], left: number, right: number) {
        while (left < right) {
            [arr[right], arr[left]] = [arr[left], arr[right]];
            left++;
            right--;
        }
    }
};