let digits = [1, 23, 1996, 24]

function array(digits){
    let counter = 0;
    for (var x = 0; x < digits.length; x++){
        counter += digits[x]
    }
    return counter
}

console.log(array(digits));