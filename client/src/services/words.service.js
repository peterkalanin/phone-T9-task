const $ = require("jquery");

const WordsService = {
  /**
   *
   * @param {{ keys: (number|string)[] }} params
   * @returns {JQuery.jqXHR}
   */
  getWords(params) {
    const url = "http://localhost:3001/words";
    return $.ajax({
      method: "POST",
      url: url,
      data: params,
    });
  },
};

module.exports = WordsService;
