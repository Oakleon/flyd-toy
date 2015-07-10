import flyd from 'flyd';
import filter from 'flyd-filter';

var a = flyd.stream(7);
var b = flyd.stream(7);

setInterval(()=>{
  a(Math.floor(Math.random()*10))
},500)


setInterval(()=>{
  b(Math.floor(Math.random()*10) + 1000)
},1500);

var m = flyd.merge(a,b);

function over800(num) {
    return num > 800;
}

function evens(num) {
    return (num % 2 === 0);
}

var bigs = filter(over800, m);
var even = filter(evens, m);

var n = flyd.merge(bigs, even);

flyd.on((v)=>{
  console.log("incomming: " + v);
}, n);
