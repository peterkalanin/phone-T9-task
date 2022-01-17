const express = require('express');
const bodyParser = require('body-parser');
const {
  getWords
} = require('./controllers/words')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.post('/words', getWords);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});