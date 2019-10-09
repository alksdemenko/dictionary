const db = require('../database');

exports.get_all = callback => {
    db
        .get()
        .collection('words_english')
        .find()
        .toArray((err, docs) => {
            callback(err, docs);
        })
};
