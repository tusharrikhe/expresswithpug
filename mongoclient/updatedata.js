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
        var mobone = { mobid: 100, mobilename: 'samsung', mobilecost: 100000 };
        var mobtwo = { mobid: 200, mobilename: 'lenovo', mobilecost: 20000 };
        collection.update({"mobid":200},{$set:{'mobilecost':50000}}, function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log('number of rows updated '+data)
            }
        })
        collection.find().toArray(function(err,res){
            if(err){
                console.log(err);
            }else{
                console.log(res);
            }
                });
       
    }
});