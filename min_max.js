function miniMaxSum(arr) {
    // Write your code here
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (arr[i] >= max) {
            max = arr[i];
        }

        if (arr[i] <= min) {
            min = arr[i];
        }
    }

    console.log(`${sum - max} ${sum - min}`);

}

miniMaxSum([1, 2, 3, 4, 5]);
