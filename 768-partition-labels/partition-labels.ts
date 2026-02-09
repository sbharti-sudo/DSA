function partitionLabels(s: string): number[] {
    let letterLastIndex = new Map < string, number>
        let n = s.length

    // last occurrence of each character
    for (let i = 0; i < n; i++) {
        letterLastIndex.set(s[i], i)
    }

    let i = 0 // start of the partition
    let j = 0; // moving pointer
    let end = 0; // end index of current partition

    let result: number[] = []
    while (j < n) {
        // check for each element what the last index for it and is it greater than end if yes then move the end /the partition to last index it has been seen so that the same letter comes in one partition not different 
        end = Math.max(end, letterLastIndex.get(s[j]));
        if (j === end) {
            result.push(j - i + 1)
            i = j + 1 // new partition starts from j+1 so move i/start there 
        }

        j++
    }

    return result;

};

