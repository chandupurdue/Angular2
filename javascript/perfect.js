// function perfect(n) {
//     var count = 0;
//     for (var i = 0; i <= n; i++) {
//         if (n % i === 0) {
//             count += i;
//         }
//     }
//     console.log((count / 2 === n) ? "Perfect Number" : "not perfect");
// }
// perfect(8);
function factor(n) {
    var factors = [];
    for (var i = 0; i <= n; i++) {
          if(n%i === 0){
             factors.push(i);
          }
    }
    console.log("The factors = " + factors);
}
factor(6);