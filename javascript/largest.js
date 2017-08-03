// function largest(a,b,c){
//     var big = a > b ? (a > c ? a : c) : (b > c ? b : c)
//    console.log(big);
// }
// largest(1,11,9);

function nearest(x,y){
        if(Math.abs(100-x) == Math.abs(100-y)) {
            console.log("both are equal");
        }else{
      console.log((Math.abs(100-x) < Math.abs(100-y)) ? "x is nearer" : "y is nearer");
        }
}
nearest(99,101);