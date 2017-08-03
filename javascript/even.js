// // function even(n) {
// //     var n = n + "";
// //     // console.log(n.substring(1,n.length));
// //     for (var i = 0; i < n.length; i++) {

// //         if (parseInt(n[i]) % 2 === 0 && parseInt(n[i + 1]) % 2 === 0) {
// //             n = n.substring(0, i + 1) + "-" + n.substring(i + 1, n.length);
// //             i++;
// //         }
// //     }
// //     console.log(n);
// // }
// // even(24568);

// function array(str) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] > str[i + 1]) {
//             var t = 0;
//             t = str[i] ;
//             str[i] = str[i + 1];
//             str[i + 1] = t;
//         }
//     }
//     console.log(str);
// }
// array([6,8,3,4,5]);
// function leap(str, end) {
//     var year = [];
//     for (var i = str; i < end; i++){
//         if((i%400 === 0 && i%100 === 0)||(i%4 === 0 && i%100 !== 0)){
//             year.push(i);
//         }
//     }
//     console.log(year);
// }
// leap(2012,2020);

function two(a, b) {
    var res = [];
    var c = (a.length > b.length) ? a.length : b.length;
    for (var i = 0; i < c; i++) {
        if (a[i] == undefined) {
            res[i] = b[i];
        } if (b[i] == undefined) {
            res[i] = a[i];
        } else {
            res[i] = a[i] + b[i];
        }
    }

    console.log(res);
}
two([2, 3, 4], [1, 2, 3, 5]);







