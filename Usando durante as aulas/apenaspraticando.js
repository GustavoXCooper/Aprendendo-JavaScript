/*function square(x){
    return x * x
}
function addSquares (a, b){
    let squareA = square(a)
    let squareB = square(b)
    return squareA + squareB
}

*/
function addSquares (a, b){
    const square = (x) => x * x

    let squareA = square(a)
    let squareB = square(b)
    return squareA + squareB
}
console.log(addSquares(3,2))