// function large(x,y){
//       if(x >= 40 && x <= 60 && y >= 40 && x <= 60){
//           console.log((x>y) ? "x is greater" : "Y is greater");
//       }else{
//           console.log("Out of the range");
//       }
// }
// large(75,86);
// large(57,68);

function String(string,char){
    var ctr = 0;
    for(var i = 0;i<string.length;i++){
        (string.charAt(i) == char)? ctr++:ctr;
    }
    if(ctr >= 2 && ctr <= 4){
        console.log("Contains 2 to 4")
    }
}
String("chaaaadra","a");