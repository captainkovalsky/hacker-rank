function birthdayCakeCandles(candles) {
    // Write your code here
    let max = candles[0];

    let r = candles.reduce((prev, candle) => {
        console.log(prev);
        if (candle >= max) {
            max = candle;
        }

        if (prev[`${candle}`]) {
            prev[`${candle}`] += 1;
        } else {
            prev[`${candle}`] = 1;
        }

        return prev;
    }, {});

    return r[max];

}


birthdayCakeCandles([4, 4, 1, 3])