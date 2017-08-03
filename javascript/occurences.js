// // // function occur(str) {

// // //     for (var i = 0; i < str.length; i++) {
// // //         var count = 0;
// // //         for (var j = i + 1; j < str.length; j++) {
// // //             if (str[i] === str[j]) {
// // //                 count++;
// // //             }
// // //         }
// // //          console.log("The number of times " + str[i] + " occured " + count);
// // //     }
// // // }
// // // occur("aabbccdd");

// // function sub(str){
// //      var str = str + "";
// //      var sub = [];
// //      for(var i = 0; i<str.length;i++){
// //          for (var  j = i+1;j<str.length;j++){
// //                 var sub1 = str.substring(i,j);
// //                 sub.push(sub1);
// //          }
// //      }
// //      console.log(sub);
// // }
// // sub([1,3,4,5]);
// function abc(){
//     console.log(arguments.callee.name);
// }
// abc();
// function str(str,n){
//     var arr = [];
//     for(var i = 0;i<n;i++){
//        arr.push(str[i]);
//     }
//     console.log(arr);
// }
// str([1,2,3,4,5],3);
// var str = [1,2,3,4,5];
// console.log(str.splice(2,1));
//  function str(str,n){
//     var arr = [];
//     for(;n<=str.length;str.length--){
//        arr.push(str[str.length-1]);
//     }
//     console.log(arr);
// }
// str([1,2,3,4,5],3);


console.log((["green", "red", "yellow"]).join(""));