const {
  buttonKeyLetters
} = require("../utils/key");
const words = require("../utils/words");

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

  /**
   * Returns most common words with coresponding to buttonKeys
   * @param {string[]} buttonKeys 
   * @returns {string[]}
   */
  getSuggestedWords: (buttonKeys) => {
    console.log(this.buttonKeys);
    if (!Array.isArray(buttonKeys)) {
      return;
    }

    return words.filter((w) => {
      return w.keys == buttonKeys.join('');
    }).map((p) => p.word);
  },

  /**
   * 
   * @param {string[]} words 
   * @param {string[]} suggested 
   * @returns {string[]}
   */
  prugeSuggestedFromWords: (words, suggested) => {
    return words.filter(word => {
      return !suggested.includes(word);
    });
  }

};



module.exports = WordsService;