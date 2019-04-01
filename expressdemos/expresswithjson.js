var express= require('express');
var app = express();

app.use(express.json());//enable the adding a middle ware it is used for request presessing
// app.get();
// app.post()
// app.put();
// app.delete();
//first agrument is path and second callback function
//which takes 2 parameters

const courses =[
{ id:1, name :'Nithu'},
{ id:2, name :'Mayur'}
];
app.get("/", function(req,res){

res.send('Helo world Rashmi ');

});

app.get("/home", function(req,res){
    res.end('Welcome Home Page  world');
});


app.get('/api/courses',(req,res) =>{
    //res.send([1,2,3]);
    res.send(courses);
});
app.get('/api/courses/:id',(req,res)=>{
   //res.send(req.params.id); 

  const course= courses.find(c=>c.id=== parseInt (req.params.id));
  if(!course) res.status(404).send('The Course with the given ID was not found');
  res.send(course);
})

app.post('/api/courses',(req,res)=>{
    if(!req.body.name || req.body.name.length<3)
    {
        res.status(400).send('Name is required and should be minimum 3 char');
        return;
    }
    const course={
    id: courses.length+1,
    name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

//port is dynamically assigned in host environment
const port =process.env.PORT || 3000;

//set or export PORT =5000
app.listen(port,function(){
console.log(`Server Started….listening to port ${3000}`);
});

//deleting by id

app.delete('/api/courses/:id',(req,res)=>{
    courses.splice((req.params.id)-1,1)

    res.send(courses)
    });

//update by id

    app.put('/api/courses', (req,res)=>{
        courses.find(req.params.id, function(err, course) {

            if (err)
                res.send(err);

            course.name = req.body.name; 

            // save the course
            
            course.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Course updated!' });
            });
        
    });
});
