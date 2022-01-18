const WordsService = require("../services/words.service");

const WordsController = {

    /**
     * Gets buttonKey array and responds with coresponding letter combinations, creating possible words.
     * @param {*} req Request
     * @param {*} resp Response
     */
    getWords: (req, resp) => {
        const body = req.body;
        let reqKeys = body['keys[]'];
        let words = WordsService.getLetterCombinations(reqKeys) || [];
        let suggested = WordsService.getMostCommonWords() || [];
        resp.json({
            words,
            suggested
        });
    }
}

module.exports = WordsController;