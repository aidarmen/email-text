const express = require('express')
const async = require('asyncawait/async')
const await = require('asyncawait/await')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Configs = require('./config')

const app = new express();
app.set('port', process.env.PORT || 8000)

require('./db')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', require('./src/router'))

app.set('port', process.env.PORT || 3000)


app.listen(app.get('port'), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Web server is listening on port %s', app.get('port'))
    }
})