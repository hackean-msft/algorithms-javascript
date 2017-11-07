
let provideRandNum = (start, stop, size) => {
    let arr = [];
    for(let i = 0; i < size; i++) {
        let intermediate = Math.floor(Math.random() * (stop - start) + 0.5)
        arr.push(start + intermediate)
    }
    return arr;   
}

let provideRandNum2D = (start, stop, rowSize, colSize) => {
    let arr = [];
    for(let i = 0; i < rowSize; i++) {
        arr.push(provideRandNum(start, stop, colSize))
    }
    return arr
}

let maximum = (arr) => {
    let maximum = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    return maximum;
}

module.exports = {
   "random1D": provideRandNum,
   "random2D":provideRandNum2D,
   "max":maximum
}