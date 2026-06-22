function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>();

    for (let word of strs) {
        let counts = new Array(26).fill(0);
        for (let ch of word) {
            counts[ch.charCodeAt(0) - 97]++
        }
        let key = counts.join(",");

        if (map.has(key)) {
            map.get(key).push(word)
        } else {
            map.set(key, [word])
        }
    }

    return [...map.values()];

};

// story: 
// make a map from key -> list of words
// for each word: build its count-key
// if key seen, push; else start new list