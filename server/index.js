const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const WordsController = require('./controllers/words.controller');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors())

app.post('/words', WordsController.getWords);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});