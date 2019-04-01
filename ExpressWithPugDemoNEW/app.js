const express =require('express');

const path=require('path');

//Initialise the app object
const app= express();

//load the view engine
app.set('views',path.join(__dirname, 'views'));
console.log(__dirname);
app.set("view engine", "pug");

//defining the routes
app.get('/', function(req,res){
let emp=[
    {
    empId:1001,
    empName:"Jakkula Niharika",
    empDept: 'IT',
    empSalary: 1000
     },
     {
        empId:1002,
        empName:"Tushar Rikhe",
        empDept: "IT",
        empSalary: 1005
         },
         {
            empId:1003,
            empName:"Sidu",
            empDept: "Accounts",
            empSalary: 3000
             }
];
res.render('index',{
    title:'This is my title for INDEX Page',
    empData: emp
})//render close
});//get close

//create another route as home
app.get('/home',function(req,res){
    res.render('home',{
        mydata:'This is my data for home'
    })
});


app.listen(4200, function(){
    console.log('Server is started on port number 4200');
});