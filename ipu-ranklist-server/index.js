require('./config/config');

const express = require('express');
var { mongoose } = require('./db/mongoose');

var app = express();
const port = process.env.PORT;



app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = { app };