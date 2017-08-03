function sunday(){
var i = 0
for(var year = 2014;year <=2050; year++){
    var d = new Date(year,0,1);
    if(d.getDay() === 0){
       i++;
         console.log("This is sunday" );

    }
}
console.log(i);
}
sunday();