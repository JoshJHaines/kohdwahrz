//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

//Task :
//Given a year, return the century it is in.

//Input , Output Examples ::
//centuryFromYear(1705)  returns (18)
//centuryFromYear(1900)  returns (19)
//centuryFromYear(1601)  returns (17)
//centuryFromYear(2000)  returns (20)
//centuryFromYear(89) returns (1)

//turn year into array
//make all arrays 4 digits
//make first two index one value
//make second two index another value
//if second index is less than 1, return first index
//if second index is greater than or equal to 1, return first index +1

//after testing current function, further test case's with more that 4 digit years failed.

function century(year) {
	const turnToArr = year;
	const arrayYear = Array.from(String(turnToArr), Number);
	if (arrayYear.length < 2) {
		arrayYear.splice(0, 0, 0);
	}
	if (arrayYear.length < 3) {
		arrayYear.splice(0, 0, 0);
	}
	if (arrayYear.length < 4) {
		arrayYear.splice(0, 0, 0);
	}

	const centVal1 = arrayYear[0].toString() + arrayYear[1].toString();
	const centVal2 = arrayYear[2].toString() + arrayYear[3].toString();

	if (centVal2 < 1) {
		return parseInt(centVal1);
	} else {
		return parseInt(centVal1) + 1;
	}
}

test = century(89);
test;
