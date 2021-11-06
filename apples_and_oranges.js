/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

//  a            s          t             b 
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesPos = apples.filter(a => a >= 0).map(ap => ap + a);
    let orangePos = oranges.filter(o => o <= 0).map(o => b - Math.abs(o));

    const i = applesPos.reduce((prev, c) => {
        if (c >= s && c <= t) {
            return prev + 1;
        }

        return prev;
    }, 0);

    const j = orangePos.reduce((prev, c) => {
        if (c >= s && c <= t) {
            return prev + 1;
        }

        return prev;
    }, 0);

    console.log(i);
    console.log(j);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])