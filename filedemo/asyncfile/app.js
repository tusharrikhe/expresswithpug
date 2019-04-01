const fsobj = require('fs');

fsobj.readFile('readMe.txt', function(err,data) {
if (err) {
     console.log("problem in reading the file");
      }
      else {
 console.log('reading');
 console.log(data.toString());
}
});
console.log('program ended');
