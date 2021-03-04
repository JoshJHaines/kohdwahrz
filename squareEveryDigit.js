function squareDigits(num) {
	let numArr = [];

	for (let i = 0; i < num.length; i++) {
		let squared = Math.pow(num[i], 2);
		numArr.push(squared);
        console.log(numArr)
	}
	return numArr;
}

squareDigits(9119)