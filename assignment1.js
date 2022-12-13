function fibs(n){
    if (n <= 0 || !Number.isInteger(n)){
        return "invalid input";
    }
    let fibArray = [];
    for (let i = 0; i < n; i ++){
        if (i === 0 || i === 1){
            fibArray.push(i);
        } else {
            fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1])
        }
    }
    return fibArray;
}

function fibsRec(n){
    if (n <= 0 || !Number.isInteger(n)){
        return "invalid input";
    }
    if (n === 1){
        return [0]
    }
    if (n === 2){
        return [0, 1];
    } else {
        let prevArray = fibsRec(n-1);
        return prevArray.concat(prevArray[n-2] + prevArray[n-3]);
    }
}

function fibsRecShorty(n){
    return n <= 0 ? "invalid number"
        : n === 1 ? [0]
        : n === 2 ? [0, 1]
        : fibsRec(n-1).concat(fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3])
}

console.log(fibs(8));
console.log(fibsRec(8));
console.log(fibsRecShorty(8));