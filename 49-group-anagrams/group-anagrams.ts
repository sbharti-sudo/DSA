function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()
    for (let s of strs) {
        let count = new Array(26).fill(0)
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++
        }
        let key = count.join("#");
        const bucket = map.get(key);
        if (bucket) bucket.push(s)
        else map.set(key, [s])
    }
    return [...map.values()]


};