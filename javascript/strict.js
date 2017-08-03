// function strict(x,y,z){
//      if(x<y && y<z){
//          return false;
//      }
//      if(x<y || x<z){
//          return true;
//      }
// }
// console.log(strict(2,1,6));

function same(x, y, z) {
    if (
        (x % 10 === y % 10 && y % 10 === z % 10) ||
        (x % 10 === y % 10 || x % 10 === z % 10 || y % 10 === z % 10)
        ){
        console.log("Two or them are all");
    }
}
same(12,32,45);