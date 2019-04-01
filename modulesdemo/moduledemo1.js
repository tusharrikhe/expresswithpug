var mod1=require('./lib/mod1');

console.log(mod1);
console.log(mod1.doget());
console.log(mod1.id);

require('./lib/mod2');
var mod2=require('./lib/mod2');
console.log(mod2);
console.log(mod2.fun());
console.log(mod2.id);
