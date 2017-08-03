// // function grade(x,y){
// //        console.log((x+y > 50 && x+y < 80 ) ? "65" : "80");
// // }
// // grade(35,20)

// function One(x,y){
//         if( x === 8 || y === 8 || x+y === 8 || Math.abs(x-y) === 8 ){
//             console.log("Either done")
//         }
// }
// One(8,4);

function same(x, y, z) {
    if (x == y && y != z || x == z && x != y || y == x && z != x) {
        console.log("20");
    } else {
        if (x == y && y == z) {
            console.log("30");
        } else {
            console.log("40");
        }
    }

}
same(30, 30, 30);