require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/bla', (req, res) => {
    console.log(req.query);
    res.send({});
})

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = { app };