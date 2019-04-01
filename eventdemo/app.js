const eve=require('events');

//declaration
const emitter=new eve.EventEmitter();

//register a listener
emitter.on('message', function(msg){
    console.log('in event listener ',msg);
})

//raise an event
emitter.emit('message',{id:1, name:'Niharika'})