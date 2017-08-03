// // // function fact(n){
// // //     var count = 1;
// // //     for(var i = 1;  i<=n; i++){
// // //         count*=i;
// // //     }
// // //     console.log(count);
// // // }
// // // fact(5);

// // function gcd(a,b){
// //        if(!b){
// //            return a;
// //        }
// //        return gcd(b,a%b);
// // }
// // console.log(gcd(2154,458));

// // function rang(a,b){
// //     var arr = [];
// //    for(var i = a+1; i<b;i++){
// //        arr.push(i);
// //    }
// //    console.log(arr);
// // }
// // rang(2,9);

// function sum(str){
//     var sum = 0;
//     for(var i = 0; i < str.length;i++){
//          sum+= str[i];
//     }
//     console.log(sum);
// 
// sum([1,2,3,4,5]);
function expo(a, n) {
    if (n === 0) {
          return 1;
    } else {

        return a * expo(a, n - 1);
    }
}

console.log(expo(4, 2));