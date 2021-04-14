// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

/******************************************************************************************
 *                        LIKES [] -- MUST BE "NO ONE LIKES THIS"                         *
 *                     LIKES ["PETER"] -- MUST BE "PETER LIKES THIS"                      *
 *             LIKES ["JACOB", "ALEX"] -- MUST BE "JACOB AND ALEX LIKE THIS"              *
 *        LIKES ["MAX", "JOHN", "MARK"] -- MUST BE "MAX, JOHN AND MARK LIKE THIS"         *
 * LIKES ["ALEX", "JACOB", "MARK", "MAX"] -- MUST BE "ALEX, JACOB AND 2 OTHERS LIKE THIS" *
 ******************************************************************************************/

//  For 4 or more names, the number in and 2 others simply increases.

function likes(names) {
	console.log(names.length);
	if (names.length === 0) {
		return "no one likes this";
	}
	if (names.length === 1) {
		return `${names[0]} likes this`;
	}
    if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	}
    if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	}else {
		return `${names[0]}, ${names[1]} and ${(names.length)-2} others like this`;
	}
}

noNames = [];
console.log(likes(noNames));
oneNames = ["Peter"];
console.log(likes(oneNames));
twoNames = ["Jacob", "Alex"];
console.log(likes(twoNames));
threeNames = ["Max", "John", "Mark"];
console.log(likes(threeNames));
fourNames = ["Alex", "Jacob", "Mark", "Max"];
console.log(likes(fourNames));
fiveNames = ["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob", "Mark", "Max"];
console.log(likes(fiveNames));
