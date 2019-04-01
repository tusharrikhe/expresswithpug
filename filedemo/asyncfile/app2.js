const fs=require('fs');
let student=[{

    name:'nithu',
    
    age:22,
    
    gender:'female'
    
    },
    
    {
    name:'sidu',
    
    age:18,
    
    gender:'male'
    
    }]
    
let data=JSON.stringify(student);
fs.writeFile('student.json',data,(err)=>{
    if(err){
        throw err;
    }else{
        console.log('data written into the file');
    }
});
let data1 =JSON.stringify(student);
fs.appendFile('student.json',data1,(err)=>{
    if(err){
        throw err;
    }else{
        console.log('data written into the file');
    }
});
console.log('this is the end of the program');