const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const router = require('./routes/index.js');
const session = require('express-session');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'keyboard bat'
}));

app.use( express.static( "public" ) );

app.use('/', router);

app.listen(port, function(req, res) {
    console.log(`Listening on port ${port}`);
});