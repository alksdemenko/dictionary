const express = require('express');
const bodyParser= require('body-parser');
const router = require('./routes/words');
const app = express();
const database = require('./database');

app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

database.connect(err => {
    if(err){
        console.log(err);
    };

    app.listen(27020, () => {
        console.log('listening on 27020')
    })
})
