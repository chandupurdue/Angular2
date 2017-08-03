function twoNum(x,y){
         if(
             (x >= 40 && x <= 60 && y >= 40 && y <= 60 )
             ||
            (x >= 70 && x <= 100 && y >= 70 && y <= 100 )
         )
         {
             console.log("in the range of 40-60 or 70-100");
         }else{
             console.log("Out of the range");
         }
}
twoNum(73,43);