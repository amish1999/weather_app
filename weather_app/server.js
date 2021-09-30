
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'dd58e59b9df6c7c59babb652042b24dd';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

<!--------------->








app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
