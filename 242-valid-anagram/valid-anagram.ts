function isAnagram(s: string, t: string): boolean {

    const countRecordS: Record<number,number> = {}
    const countRecordT: Record<number,number> = {}


    if(s.length !== t.length){
        return false 
    }
    
    for(let char of s){
        countRecordS[char] = (countRecordS[char] || 0 ) + 1;

    }

    for(let char of t) {
        countRecordT[char] = (countRecordT[char] || 0) +1;
    }

    for(const key of Object.keys(countRecordS)){
        if(countRecordS[key] !== countRecordT[key]) {
            return false
        }
    }
    return true
};