const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

app.listen(port, function(req, res) {
    console.log(`Listening on port ${port}`);
});