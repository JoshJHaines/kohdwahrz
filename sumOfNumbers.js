function getSum(a,b){
    
    console.log(a, b)
    if ( a === b){
        return a  
    }
    if (a > b){
        return ((a-b)+1) * (a + b) / 2;
    } else {
        return ((b-a)+1) * (b + a) / 2;
    }
}