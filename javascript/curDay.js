// function curDay(str) {
//     var today = new Date();
//     var mm = today.getMonth() + 1;
//     var dd = today.getDate();
//     var yy = today.getFullYear();
//     console.log(mm + str + dd + str + yy);
// }
// curDay("/");
// function days(d, y) {
//     if (d % 2 === 0 && d !== 2) {
//         console.log("number of days = 30");
//     } if (d !== 2 && d % 2 !== 0) {
//         console.log("number of days = 31");
//     }
//     if (d === 2) {
//         if ((y % 400 === 0 && y % 100 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
//             console.log("number of days = 29");
//         } else {
//             console.log("number of days = 28");
//         }
//     }
// }
// days(2, 2016);
// function month(str) {
//     var months = ["Jan", "Feb", "mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "oct", "nov", "dec"];

//     var today = new Date(str);
//     var mm = today.getMonth();
//     console.log(months[mm]);
// }
// month('2009-3-5');
function week(str) {
    var today = new Date(str);
    var dd = today.getDay();
    if (dd == 5 || dd == 6) {
        console.log("weekday");
    } else {
        console.log("Not a weekday");
    }
}
week("2014,02");







