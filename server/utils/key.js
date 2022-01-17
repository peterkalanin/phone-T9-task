const buttonKeyLetters = {
    0: [' '],
    1: [''],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    '*': ['+'],
    '#': [''],
};

const lettersButtonKeys = {};
Object.keys(buttonKeyLetters).forEach((key) => {
    const letters = keys[key];
    if (!letters) {
        return;
    }

    letters.forEach((letter) => {
        lettersButtonKeys[letter] = key;
    });
});

/**
 * Returns coresponding button key to input letter.
 * @param {string} letter 
 * @returns {number} buttonKey
 */
const getKeyByLetter = (letter) => {
    if (!letter) {
        return;
    }

    return letterKeys[letter];
};

module.exports = {
    buttonKeyLetters,
    lettersButtonKeys,
    getKeyByLetter
}