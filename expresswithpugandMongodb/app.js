const express =require('express');
const path= require('path');
const mongoose =require('mongoose');
let Employee= require('./model/employee');
var bodyParser= require('body-parser')

//connect to mongodb
mongoose.connect('mongodb://localhost/mypugdb');
let db=mongoose.connection;
db.once('open',function(){
    console.log('Connection Open')
});
db.once('error',function(err){
    console.log(err);
});
const app= express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//add body parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
//app routes

app.get('/', function(req,res){
    Employee.find({}, function(err,employeedata){
        res.render('index',{
            title:'This is Capgemini L&D',
            empData: employeedata,
            emp:'L&D Department'
        });
    });
});
//add
app.get('/add',function(req,res){
    res.render('addEmployee',{
        mydata:'This is Capgemini L&D'
    });

});

app.get('/home',function(req,res){
    res.render('home',{
        mydata:'This is from home'
    });
    });
    
//post
app.post('/emp/adddata',function(req,res){
        let emp=new Employee();
    emp.empid=req.body.eid;
    emp.empname=req.body.ename;
    emp.empdept=req.body.edep;
    emp.empsalary=req.body.esal;
    emp.save(function(err){
    if(err){
        console.log(err);
        return;
    }else{
         res.redirect('/');
    }
    });
    
    });
    

//app routes



//make the server on any port number
app.listen(1000, function(){
    console.log('server is running on port number 1000')
});