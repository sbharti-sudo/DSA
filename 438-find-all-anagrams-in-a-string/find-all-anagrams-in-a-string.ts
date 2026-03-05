function allZero(counter: number[]): boolean {
    for (let i of counter) {
        if (i !== 0)
            return false;
    }
    return true;
}


function findAnagrams(txt: string, pat: string): number[] {
    let n = txt.length;
    let counter: number[] = new Array(26).fill(0);

    for (let i = 0; i < pat.length; i++) {
        let ch = pat[i];
        counter[ch.charCodeAt(0) - 97]++;
    }

    let i = 0;
    let j = 0;
    let result: number[] = [];
    let k = pat.length;

    while (j < n) {
        counter[txt[j].charCodeAt(0) - 97]--;

        if (j - i + 1 === k) {
            if (allZero(counter)) {
                result.push(i);
            }
            counter[txt[i].charCodeAt(0) - 97]++;
            i++;
        }
        j++;
    }
    return result;

}