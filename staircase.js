function staircase(n) {
    const s = ' ';
    const stair = '#';
    for (let i = 0; i < n; i++) {
        let p = '';
        for (let j = 0; j < n - (i + 1); j++) {
            p += s;
        }
        let sp = '';
        for (let k = 0; k < i + 1; k++) {
            sp += stair;
        }
        console.log(`${p}${sp}`);
    }
}

staircase(6);