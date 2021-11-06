function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if ((v1 - v2) <= 0) {
        return "NO";
    }

    let disDiff = x1 - x2;
    if (disDiff % (v1 - v2) === 0) {
        return 'YES';
    } else {
        return 'NO';
    }
}

kangaroo(0, 2, 5, 3);
// kangaroo(0, 3, 4, 2);