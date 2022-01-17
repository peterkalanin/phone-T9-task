const { buttonKeyLetters } = require("../utils/key");

const WordsService = {
  /**
   * Returns all combinations of mobile key buttons
   * @param {string[]} buttonKeys Array of numbers
   * @returns {string[]}
   */
  getLetterCombinations: (buttonKeys) => {
    if (!Array.isArray(buttonKeys)) {
      return;
    }
    if (buttonKeys.length == 0) {
      return;
    }
    if (buttonKeys)
      return buttonKeys
        .map((k) => {
          return buttonKeyLetters[k];
        })
        .reduce((prev, cur) => {
          const arr = [];

          prev.forEach((p) => {
            cur.forEach((c) => {
              arr.push(p + c);
            });
          });

          return arr;
        });
  },
};

module.exports = WordsService;
