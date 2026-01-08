function longestCommonPrefix(strs: string[]): string {

    if(strs.length === 0){
        return ""
    }

    let first = strs[0]
    for(let i = 0; i < first.length ; i++){

        let ch = first[i]

    for(let j = 1; j < strs.length; j++){
        if(i>=strs[j].length || strs[j][i] !== ch ){
            return first.slice(0,i)

        }
    }
    }
    return first
};