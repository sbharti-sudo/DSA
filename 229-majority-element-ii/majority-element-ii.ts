function majorityElement(nums: number[]): number[] {
    let cand1: number | null = null;
    let cand2: number | null = null;

    let count1 = 0;
    let count2 = 0;

    for (let x of nums) {
        if (cand1 === x) count1++;
        else if (cand2 === x) count2++;
        else if (count1 === 0) {
            cand1 = x;
            count1 = 1
        }
        else if (count2 === 0) {
            cand2 = x;
            count2 = 1
        } else {
            count1--
            count2--
        }
    }
    // verify the candidates

    count1 = 0;
    count2 = 0;

    for (const x of nums) {
        if (x === cand1) count1++;
        else if (x === cand2) count2++
    }


    let res: number[] = [];
    let limit = Math.floor(nums.length / 3);

    if (count1 > limit && cand1 !== null) res.push(cand1);
    if (count2 > limit && cand2 !== null) res.push(cand2);

    return res
};