function minimumLength(s: string): number {
    //suffix  and prefix must have  same charaters,  characters in suffice and prefic should not intersect.
    let n = s.length
    let i = 0;
    let j = n - 1

    while (i < j && s[i] === s[j]) {
        // first check if the characters at both ends match then move forward and give chance to i and j to form larger prefix or suffix for deletion

        let ch = s[i] // or it can be j as well 

        while (i < j && s[i] === ch) {
            i++
        }
        while (j >= i && s[j] === ch) {
            j--
        }
    }
    return j - i + 1
};