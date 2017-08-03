// function lastDigit(x,y,z){
//     if(x%10 == y%10 && x%10 == z%10){
//         console.log("Three digits have same number as last digit");
//     }
// }
// lastDigit(22,62,52);

function Lower(str) {
    if (str.length <= 3) {
         console.log(str.toUpperCase());
    } else {
        var str1 = str.substring(0, 3);
        var str1 = str1.toLowerCase();
        console.log(str1+str.substring(2+1))
    }
}
Lower("CHAndra");