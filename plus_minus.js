function plusMinus(arr) {
    let [p, n, z] = arr.reduce((prev, el) => {
        prev[0] += el > 0;
        prev[1] += el < 0;
        prev[2] += el === 0;

        return prev;
    }, [0, 0, 0]);

    console.log((p / arr.length).toFixed(6));
    console.log((n / arr.length).toFixed(6));
    console.log((z / arr.length).toFixed(6));
    // Write your code here

}

plusMinus([-4, 3, -9, 0, 4, 1]);