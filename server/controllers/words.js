const getWords = (req, resp) => {
    const body = req.body;
    let reqKeys = body['keys[]'];

    console.log(body);

    res.json([]);
}

module.exports = {
    getWords
}