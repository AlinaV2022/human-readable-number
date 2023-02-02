module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbersTeens = ['ten', 'eleven', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];
    let result = [];

    if (Math.floor(number / 100)) {
        result.push(numbers[Math.floor(number / 100)], 'hundred')
        number = number % 100;
    }

    if (Math.floor(number / 10) && Math.floor(number / 10) === 1) {
        if (number % 10 === 2) {
            result.push('twelve');
        } else if (number % 10 === 4) {
            result.push('fourteen');
        } else {
            let ending = ((number % 10) > 2) ? 'teen' : '';
            result.push(numbersTeens[number % 10] + ending );
        }
    }

    if (Math.floor(number / 10) && Math.floor(number / 10) !== 1) {
        result.push(numbersTeens[Math.floor(number / 10)] + 'ty' );
        number = number % 10;
    }

    if (number < 10) {
        if ( !(number === 0 && result.length)) {
            result.push(numbers[number]);
        }
    }

    return result.join(' ');
}
