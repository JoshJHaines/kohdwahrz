//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {

    var arrSum = 0
	var negs = 0

    for (let i = 0; i = arr.length-1; i++){
		if (arr[i] >= 0) {
			arrSum = arrSum + arr[i]
		}
		elseis (arr[i] < 0) {
				negs = negs + arr[i]
		}
		console.log(arrSum)
    }
	return arrSum
}

positiveSum([-1,2,3])