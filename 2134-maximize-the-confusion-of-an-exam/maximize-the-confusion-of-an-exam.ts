function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let i = 0
    let j = 0;
    let result = 0;
    let mp: Record<string, number> = { T: 0, F: 0 }; // will store the  number of t and f in the given window so that we can find the min - whiever count is min that we will flip so that we can use less count of k.

    while (j < answerKey.length) {
        mp[answerKey[j]]++ //whatever we get increase the frequency of that letter in the map

        while (Math.min(mp['T'], mp['F']) > k) {  // get the minimum between T and F to flip  so that we can save up k count
            mp[answerKey[i]]--  // but if even min greater than k then reduce the window
            i++
        }

        result = Math.max(result, j - i + 1)
        j++
    }
    return result
};