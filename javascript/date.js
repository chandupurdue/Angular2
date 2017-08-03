var date = new Date();
console.log(date);
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = weekday[date.getDay()];
console.log("The day today is " + day);
var dd = date.getDate();
var mm = date.getMonth()+1;
var yyyy = date.getFullYear();
if(dd<10){
    dd = '0'+dd;
}
if(mm<10){
    mm = '0'+mm;
}
console.log("Today date is "+mm+"/"+dd+"/"+yyyy);
var hh = date.getHours();
var prepand = (hh>12)? "pm" : "am";
if(hh>12){
    hh-=12;
}
var mm = date.getMinutes();
var ss = date.getSeconds();
console.log("Current time is  "+ hh + " "+ prepand+ ":"+ mm+ ":"+ss);