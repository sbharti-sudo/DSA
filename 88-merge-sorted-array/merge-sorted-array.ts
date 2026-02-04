/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    //logic  is to traverse backward
    let idx = m + n - 1 // last index of nums1 
    let i = m - 1; // last valid element of nums1
    let j = n - 1; // last element of num2 

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) { 
            /* as the arrays are sorted the last element  would be largest  spo compare the largest
         element in num 1 to largest element in num2
        so that why traverse from back*/
            nums1[idx] = nums1[i];
            idx--;
            i--;

        } else {
            nums1[idx] = nums2[j]
            idx--;
            j--
        }
    }

    // if element is j is left  : all the elemnt in i were greater in j so j's element didnt move or If nums2 still has elements left, copy them

    while (j >= 0) {
        nums1[idx] = nums2[j]
        idx--;
        j--;
    }


};