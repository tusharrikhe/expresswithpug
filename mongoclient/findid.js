var mongodb1 = require('mongodb');
var mongoclient1 = mongodb1.MongoClient;
var url = 'mongodb://localhost:27017/mobile';
mongoclient1.connect(url, function (err, client) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connection established ' + url);
        var db = client.db('mobile');

        var collection = db.collection('mobiledata');
        collection.find({mobid:100}).toArray(function(err,res){
            if(err){
                console.log(err);
            }else{
                console.log(res);
            }
                });
       
    }
});