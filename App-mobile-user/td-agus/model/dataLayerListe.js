var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb+srv://Xenon:batman2010@cluster0-arabs.mongodb.net/AppListe?retryWrites=true";

// var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://Xenon:batman2010@cluster0-arabs.mongodb.net/AppListe?retryWrites=true', { useNewUrlParser: true });

var client = new MongoClient(uri, {
    useNewUrlParser: true
});

var db;

var dataLayerListe = {

    init : function(cb) { // on passe une fonction -> callback
        client.connect(function(err) {
            if(err) throw err;
            db = client.db("AppListe");
            cb();
        });
    },

    getTask : function(cb) {
        db.collection("AppListe").find({}).toArray(function(err, docs) { //Docs est le résultat de find
            cb(docs);
        });
    },

    insertTask : function(task, cb) {
        db.collection("AppListe").insertOne(task, function(err, result) {
            cb();
        });
    },

    modifyTask : function(task, data, cb) {
        db.collection("AppListe").updateOne(task, data, function(err, result) {
            cb();
        });
    },

    deleteTask : function(task, cb) {
        db.collection("AppListe").deleteOne(task, function(err, result) {
            cb();
        });
    }
}

module.exports = dataLayerListe;