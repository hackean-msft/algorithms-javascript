
/**
* Generates a single-dimensional array random numbers between start and stop
 * size: the length of the array
 */
let provideRandNum = (start, stop, size) => {
    let arr = [];
    for(let i = 0; i < size; i++) {
        let intermediate = start +  Math.floor(Math.random() * (stop - start) + 0.5)
        arr.push(intermediate)
    }
    return arr;   
}


/**
* Generates a two-dimensional array random numbers between start and stop
 * rowSize: the amount of rows
 * colSize: the amount of values in each row
 */
let provideRandNum2D = (start, stop, rowSize, colSize) => {
    let arr = [];
    for(let i = 0; i < rowSize; i++) {
        arr.push(provideRandNum(start, stop, colSize))
    }
    return arr
}

/**
 *  finds the maximum element in the arry
 */
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