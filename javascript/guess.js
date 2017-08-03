var date = new Date();
var oneday = 24*60*60*1000;
var christmas = new Date(2017,12,25);
var diff = Math.floor(Math.abs((date-christmas)/oneday));
console.log(diff);