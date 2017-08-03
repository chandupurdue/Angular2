var number = 20;
var diff = (number > 13) ?  2*Math.abs(number-13) : Math.abs(number-13);
console.log(diff);

var number2 = 30;
console.log((number === number2) ? 3*(number+number2): number+number2);

var number3 = 50;
console.log((number === 50 || (number2+number3) === 50) ? "true":"false"); 
var number4 = 19;
console.log((number3 > 0 && number4 < 0 || number3 < 0 && number4 > 0) ?"true": "false"); 
function split(str){
    var str1 = str.substring(0,2);
    var str2 = str.substring(3,str.length);
    console.log(str1+str2);

};
split("chandra");