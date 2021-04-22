// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
	firstLetter = ""
    newStr = ""
    for (i=0, i < str.length, i++){
        if (i === 0){
            firstLetter = str[i]
        }
        if (str[i] === ' '){
            newStr += `${firstLetter} `;
            firstLetter = str[i + 1];
            i++
        } else {
            newStr += str[i]
        }
    }
console.log(newStr)
}

pigIt('Hello world !')
console.log(pigIt('Hello world !'))

console.log(6)