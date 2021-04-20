var moveZeros = function (arr) {
 notZeros = []
	zeros = [];
	for (num of arr) {
        if (num === 0) {
            zeros.push(num);
		} else {
            notZeros.push(num)
        }
	}
    zerosEnd = notZeros.concat(zeros)
    console.log(zeros)
    console.log(notZeros)
    console.log(zerosEnd)
    return zerosEnd
};

moveZeros([false,1,0,1,2,0,1,3,"a"])
