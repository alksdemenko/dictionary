const Words = require('../models/words');

exports.get_all = function (req, res) {
    Words.get_all((err, docs) => {
        if(err){
            console.log(err);
            res.sendStatus(500)
        }

        res.send(docs)
    })
};
