// function number(n) {
//     var n = n + "";
//     console.log(typeof(n))
//     var n = n.split("").reverse().join("");
//     var n = Number(n);
//     console.log(typeof(n));
// }
// number(2356);
// function combine(str) {
//     var array = [];
//     for (var i = 0; i < str.length; i++) {
//         for (var k = i + 1; k <= str.length; k++) {
//             if (i != k) {
//                 var char = str.substring(i, k);
//                array.push(char);
               
//             }
//         }
      
//     }
    
//      console.log(array);
// }
// combine("dog");
function alpha(str) {
      var str = str.split("").sort().join("");
      console.log(str);
}
alpha("chandra");
