getEmployee=function(){

    console.log("in Employee");
    
    }
    
    getData=function(name){
    
    console.log("in GET DATA"+name);
    
    }
    
    module.exports = {
    
    emp : getEmployee,
    
    pro : getData
    
    }
    