//Create a function that will take in a variable number of arguments and return their product.

function product(){
    let a= 1
    for (var x=0; x < arguments.length; x++){
        a= a * arguments[x]
    }
    return a;
}

console.log(product(9,9))

console.log(product(10,11))