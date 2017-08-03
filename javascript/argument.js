// function argu(str){
//     console.log(typeof(str));
// }
// argu(10);

// function matrix(n) {
//     var i;
//     var j;
//     for (var i = 0; i <= n; i++) {
//         console.log("/n");
//         for (var j = 0; j <= n; j++) {
//             if (i === j) {
//                 console.log("1");
//             } else {
//                 console.log("0");
//             }
//         }
//     }
// }
// matrix(4);

function small(arr) {
    // var arr = arr + " ";
    //console.log(typeof(arr));
    //var arr = arr.split("");
    //console.log(arr[0]);
    var result = arr[0];
    var result1 = arr[0];
    for (var i = 0; i < arr.length; i++) {
        // console.log(i);
        // console.log(arr[i]);
        result = (result > arr[i]) ? arr[i] : result;
        result1 = (result < arr[i]) ? arr[i] : result;
        // console.log(result);
    }

    console.log(result1 - result);
}
small([1, 2, 3, 4, 5]);