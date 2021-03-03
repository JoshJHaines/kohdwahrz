function maxDiff(list) {
    let bigNum = Math.max(...list);
    let lilNum = Math.min(...list);
    let numDif = bigNum - lilNum

    if (list.length <= 1){
        return 0
    } else{
        return numDif
    }
}

let test = maxDiff([-0, 1, 2, -3, 4, 5, -6])
test