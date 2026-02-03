function reverseVowels(s: string): string {
    // split the string
    const arr = s.split("");
    //define left and right pointer
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        //if left value is not vowel increase the pointer
        if (!isVowel(arr[left])) {
            left++
        } else if //if right value is not vowel decrease the pointer
            (!isVowel(arr[right])) {
            right--
        } else { // if both values are vowel swap the value and increase the pointer
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++
            right--
        }


    }
    return arr.join("");
};
// function to check if its a vowel
function isVowel(ch: string): boolean {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
        ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {
        return true;
    } else {
        return false
    }
}