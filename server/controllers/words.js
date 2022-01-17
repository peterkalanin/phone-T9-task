const WordsService = require("../services/words.service");

const getWords = (req, resp) => {
    const body = req.body;
    let reqKeys = body['keys[]'];

    console.log(reqKeys);

    let words = WordsService.getLetterCombinations(reqKeys);

    res.json(words);
}

module.exports = {
    getWords
}