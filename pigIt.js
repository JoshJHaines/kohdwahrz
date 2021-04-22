// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
	firstLetter = "";
	newStr = "";
	for (i = 0; i < str.length; i++) {
		if (i === 0) {
			firstLetter = str[i];
			newStr = "";
		}
		if (str[i] === " ") {
			newStr += `${firstLetter}ay `;
			firstLetter = str[i + 1];
			i++;
		} else if (i !== 0) {
			newStr += str[i];
		}
	}
	if (firstLetter === "!" || firstLetter === "?" || firstLetter === ".") {
		newStr += `${firstLetter}`;
	} else {
		newStr += `${firstLetter}ay`;
	}
	return newStr;
}

test1 = pigIt("Hello world !");
test1;
test2 = pigIt("Pig latin is cool");
test2;
test3 = pigIt("This is my string");
test3;
