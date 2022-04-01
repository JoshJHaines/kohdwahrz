var deleteDuplicates = function (inputList) {
    let outputList = [];
    let matchNum = false
    
	for (let i = 0; i < inputList.length; i++) {
		matchNum = false
        for (let j = 0; j < outputList.length; j++) {
            if (inputList[i] === outputList[j]) {
                matchNum = true
			}
        }
        if (matchNum === false) {
            outputList.push(inputList[i])
        }
	}
    return outputList;
};


module.exports = deleteDuplicates;