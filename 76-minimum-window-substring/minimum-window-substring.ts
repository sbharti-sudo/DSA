function minWindow(s: string, t: string): string {
    let n = s.length
    let i = 0;
    let j = 0;

    if (t.length > n) {
        return ""
    }

    let start_i = 0;
    let requiredCount = t.length;

    let mp: Map<string, number> = new Map();
    let minWindowSize = Infinity;

    // store the count for each value  in t 

    for (let k = 0; k < t.length; k++) {
        mp.set(t[k], (mp.get(t[k]) || 0) + 1);
    }

    while (j < n) {
        let ch = s[j];

        if ((mp.get(ch) || 0) > 0) // mean that charater is in t  and we need that character  so we  have found one so we duduct that character count from required count
         {
            requiredCount--;
    }
    mp.set(ch, (mp.get(ch) || 0) - 1); // reduce the character count from t map.
    // try to reduce the windown size until required count is zero so move i 
    while (requiredCount === 0) {
        const currWindowSize = j - i + 1 // get the current window size at each i 
        if (minWindowSize > currWindowSize) {
            minWindowSize = currWindowSize;
            start_i = i
        }
        /*We're about to move i forward (shrink the window from the left), so we "return" the character s[i] back to the map by incrementing  its count.
When we first expanded the window with j, we decremented the count (consumed the char).
Now we're releasing it, so we increment (unconsume the char).*/
        mp.set(s[i], (mp.get(s[i]) || 0) + 1);
        if ((mp.get(s[i]) || 0) > 0) {
            requiredCount++;
        }
        i++
    }
    j++
}
return minWindowSize === Infinity ? "" : s.substring(start_i, start_i + minWindowSize)
};