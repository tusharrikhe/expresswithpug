var Emp = require('./lib/employee');

empOne=new Emp.data(1001,'rashmi',8888.88);
empTwo=new Emp.data(1002,'parth',8888.88);
Emp.set(empOne);
Emp.set(empTwo);
Emp.get();

