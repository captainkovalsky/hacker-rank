function diagonalDifference(arr) {
    // Write your code here
    let s = arr.length;

    if (s === 1) {
        return 0;
    }

    //left  0,0 -> 1,1 -> 2,2 -> 3,3
    //right 0,3 -> 1,2 -> 2,1 -> 3,0 

    let left = 0;
    let right = 0;
    for (let i = 0, j = 0; i < s; i++) {
        left += arr[i][i];
        right += arr[i][s - 1 - i];
    } 


    return Math.abs(left - right);
}


const arr = [
    [11, 2, 4, 3],
    [4, 5, 6, 5],
    [10, 8, -12, -2],
    [5, 6, 7, 8],
]

const result = diagonalDifference(arr);

console.log(result);