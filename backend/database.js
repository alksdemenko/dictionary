const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://alksdemenko:sebafr21@simple-dictionary-ohdqi.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const state = {
    db: null
};


exports.connect = function (done) {
    if (state.db) {
        return done();
    }

    client.connect(err =>{
        if (err) {
            return done(err);
        }
        state.db = client.db("simple_dictionary");
        done();
    })
}

exports.get = function () {
    return state.db;
}
