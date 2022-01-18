const fs = require('fs');
const KeyUtils = require('./key');

let words;

try {
    const data = fs.readFileSync('./server/assets/words.txt', 'utf-8');
    words = data ?
        data
        .split('\n')
        .map((w) => w.replace(',', '').replace('\r', ''))
        .map((w) => {
            const keys = w
                .split('')
                .map((letter) => {
                    return KeyUtils.getKeyByLetter(letter);
                })
                .join('');

            return {
                word: w,
                keys: keys,
            };
        }) : [];
} catch (err) {
    console.error(err);
}

module.exports = words;