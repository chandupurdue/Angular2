// function sign(a, b, c) {
//     var product = a * b * c;
//     if (product < 0) {
//         console.log("-");
//     } else {
//         console.log("+");
//     }
// }
// sign(6, 7, 3);

// function three(a, b, c) {
//     var result = a > b ? (a > c ? a : c) : (b > c ? b : c);
//     var lowest = a < b ? (a < c ? a : c) : (b < c ? b : c);
//     console.log(result, lowest);
// }
// three(2, 6, 8);
// function five(a, b, c, d, e) {
//     var result = a > b ? (a > c ? a : c) : (b > c ? b : c);
//     console.log((d > e ? (d > result ? d : result) : (e > result ? result : e)));

// }
// five(2,-5,-8,7,6);

// function odd(n){
//     for(var i = 0 ; i <= n ; i++ ){
//         if(i%2 === 0){
//             console.log(i + " is even");
//         }else{
//             console.log(i + " is odd ");
//         }
//     }
// }
// // odd(15);

// function bizz() {
//     for (var i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i + "fizzBuzz");
//         } if (i % 3 === 0) {
//             console.log(i + "fizz");
//         } if (i % 5 === 0) {
//             console.log(i + "buzz");
//         }
//     }
// }
// bizz();
//console.log(Math.pow(4, 2));
function star(n) {
    var chr = '';
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            chr = chr + ("*");
        }
        console.log(chr);
        chr = '';
    }

}
star(4);









