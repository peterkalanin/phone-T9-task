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

        console.log(reqKeys);

        let words = WordsService.getLetterCombinations(reqKeys);

        res.json(words);
    }
}

module.exports = WordsController;