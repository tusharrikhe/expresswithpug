const express= require('express');
const app= express();
//route methods
app.get('/',function(req, res)
{
res.send('This is root path');
});
app.get('/home',function(req,res){
    res.send('HomePage');
});
//We will start the server on particular path
app.listen(1000, function(){
    console.log('server is running on port 1000')
});