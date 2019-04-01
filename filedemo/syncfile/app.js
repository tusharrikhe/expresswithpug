const fs=require('fs');
fs.writeFile('input.txt',"Hello Data....",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Write operation is completed');
    }
});
//sync operation
var data=fs.readFileSync('input.txt')
console.log("Synchrpnous read: "+data.toString());
console.log('Program End');