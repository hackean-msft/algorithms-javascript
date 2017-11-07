utils = require("./utils")

let elements = utils.random1D(50, 100, 10);
console.log(elements)

let peakFind1D = (arr) => {
    let mid = Math.floor(arr.length / 2)

    if (arr.length == 1) {
        return arr[0];
    }

    
    if (arr[mid] < arr[mid + 1]) {
        return peakFind1D(arr.slice(mid + 1, arr.length))
    } else if (arr[mid] < arr[mid - 1]) {
        return peakFind1D(arr.slice(0, mid))
    } else {
        return arr[mid];
    }
}

let result = peakFind1D(elements)
console.log(result)


console.log("PEAK FIND 2D");
// let elements2D = utils.random2D(1, 100, 8, 8);
let elements2D = [ [ 43, 57, 92, 91, 9, 40, 57, 83 ],
[ 3, 16, 91, 47, 24, 32, 88, 73 ],
[ 55, 14, 7, 84, 25, 54, 67, 36 ],
[ 34, 22, 83, 19, 26, 72, 77, 73 ],
[ 79, 72, 14, 94, 59, 91, 92, 93 ],
[ 87, 38, 59, 95, 22, 8, 37, 16 ],
[ 55, 6, 5, 52, 43, 75, 48, 70 ],
[ 78, 5, 5, 94, 37, 73, 90, 81 ] ];
console.log(elements2D)

let peakFind2D = (arr) => {
    let mid = Math.floor((arr[0].length) / 2);
    let max = arr[0][mid]
    let maxRow = 0;
    for(let i = 1; i < arr.length; i++) {
        if (max < arr[i][mid]) {
            max = arr[i][mid]
            maxRow = i;
        }
    }

    if (arr[0].length == 1) {
        return max
    }

    if (max < arr[maxRow][mid + 1]) {
        return peakFind2D(arr.map((row)=> row.slice(mid + 1, row.length)))
    } else  if (max < arr[maxRow][mid - 1]){
        return peakFind2D(arr.map((row)=> row.slice(0, mid)))
    } else {
        return max
    }
}



result = peakFind2D(elements2D)
console.log(result)