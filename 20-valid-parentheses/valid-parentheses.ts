function isValid(s: string): boolean {
    let stack: string[] = []
    let stackClosingMap: Record<string,string>={
        ")":"(",
        "}":"{",
        "]":"[",
    }
    for(const ch of s){
        if(ch==="(" || ch==="{" || ch==="["){
            stack.push(ch)
        }else{
            if(stack.pop() !== stackClosingMap[ch]){
                return false
            }
        }
    }
    return stack.length === 0;
};