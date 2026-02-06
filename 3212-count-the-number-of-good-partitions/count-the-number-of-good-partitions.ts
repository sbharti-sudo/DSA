function numberOfGoodPartitions(nums: number[]): number {

    let MOD = 1_000_000_007 // result can be larger so taking mod

    let last_index = new Map<number,number>; //it would store the number and and last index where it has appeared

    let n = nums.length;

    for (let i = 0; i < n; i++) {
        last_index.set(nums[i], i)! // if the same number comes again in array it will replace the previous index with the current index for that number
    }

    let i = 0;
    let j = last_index.get(nums[0]);
    let result = 1;
    /* check each number everytime has it appeared later in the array if it has j moves to that position as same number cannot be two partition. (we consider that one partition) */

    while (i < n) { // i will keep traversing
        if (i > j) {
            result = (result * 2) % MOD //  number has  option to add on with the current partition or create it own partition. and options keeps on increasing with multiple of 2
            
        }
        j = Math.max(j, last_index.get(nums[i]!))
            /*
            j is not “the last index of nums[i]”.

j means: the farthest last-occurrence index among ALL numbers we have seen in the current segment so far.
            */
        i++;
    }

    return result;
};