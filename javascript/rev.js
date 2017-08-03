// String.prototype.replaceAt = function(index, replace) {
//   return this.substring(0, index) + replace + this.substring(index + 1);
// }

function swap(str){
    var str1 = str.split("");
    var k = str1[0];
    str1[0] = str1[str1.length-1];
    str1[str1.length-1] = k;
    console.log(str1.join(""));
}
function front(str){
    console.log(str[0]+str.substring(1,str.length-1)+str[0]);
}
front("chandra");
swap ("chandra");

function multiple(number){
     console.log((number%3 === 0 || number%7 === 0) ? "multiple of 3 0r 7" : "not a multiple"); 
}
multiple(14);