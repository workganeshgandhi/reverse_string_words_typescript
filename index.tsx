function reverseIndividualWords(str: string): string {
    let result = '';
    let wordStart = 0;

    for (let i = 0; i <= str.length; i++) {
        if (i === str.length || str[i] === ' ') {
            for (let j = i - 1; j >= wordStart; j--) {
                result += str[j];
            }
            if (i < str.length) {
                result += ' ';
            }
            wordStart = i + 1;
        }
    }

    return result;
}

// Example usage
const inputString = "Hello world from TypeScript";
const reversedWordsString = reverseIndividualWords(inputString);
console.log(reversedWordsString); // Output: "olleH dlrow morf tpircSyT"
