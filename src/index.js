import flyd from 'flyd';
import filter from 'flyd-filter';
import takeUntil from 'flyd-takeuntil';
import flatmap from 'flyd-flatmap';

var killer_queen = flyd.stream();
var source = flyd.stream(7);

setInterval(()=>{
  killer_queen(1);
}, Math.floor(Math.random()*1000) );

setInterval(()=>{
  source(2);
},Math.floor(Math.random()*10));

var tu = takeUntil(source, killer_queen);

flyd.on( (v) => {
    console.log(v);
}, tu);
