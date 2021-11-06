function timeConversion(s) {
    // Write your code here
    if (s === '12:00:00AM') {
        return '00:00:00';
    }

    if (s === '12:00:00PM') {
        return '12:00:00';
    }

    const [time, type] = [s.slice(0, s.length - 2), s.slice(-2)];

    let [hour, minute, sec] = time.split(':');
    if(type == 'AM') {
        if (hour == 12) {
            hour = "00";
        }

        return [hour, minute, sec].join(':');
    }

    if(hour != 12) {
        hour = +hour + 12;
    }

      return [hour, minute, sec].join(':');

}

const input = process.argv[2];

const result = timeConversion(input);

console.log(result);