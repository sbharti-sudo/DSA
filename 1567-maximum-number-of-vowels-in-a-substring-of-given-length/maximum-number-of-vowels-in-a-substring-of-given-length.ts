function isVowels(ch: string){
    if(ch ==='a' || ch ==='e' || ch ==='i' || ch ==='o' || ch ==='u'){
        return true 
    } 
    return false
}

function maxVowels(s: string, k: number): number {

    let i = 0;
    let j = 0;
    let count = 0;
    let maxValue = 0;

    while(j < s.length){
        if(isVowels(s[j])){
            count++
        }
        if(j-i+1 === k){
            maxValue = Math.max(count,maxValue)
            if(isVowels(s[i])){
                count--;
            }
            i++
        }
        j++
    } 
    return maxValue
};