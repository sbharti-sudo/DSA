function reverseWords(s: string): string {
    let arr = s.split("");
    let n = arr.length

    // this function is written to reverse the whole string
    const reverse = (start, end) => {
        let left = start
        let right = end - 1

        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp
            left++
            right--
        }

    };
    //step1 : reverse the whole string
    reverse(0, n)

    let l = 0 // pointer to start of the word in the string
    let r = 0 // pointer to track the end of the word in the string
    let i = 0 // traverse the whole string
    while (i < n) {
        while (i < n && arr[i] != " ") { // until there is no space found ith ch will be asiiigned to r and moves ahead
            arr[r] = arr[i];
            r++;
            i++;
        }
        if (l < r) { //  this means we found empty space  which means its end of the word
            reverse(l, r) // once the word is found reverse it 
            arr[r] = " " // we need to leave a space after each word
            r++; // after that increase the pointe 
            l = r; // shift starting pointer to get started with a new word 
        }

        i++ // i will keep increasing
    }
    return r === 0 ? "" : arr.slice(0, r - 1).join("") // r-1 because r at the end will be pointing to empty space



};