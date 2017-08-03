function longest(str){
    var result = [];
    var str = str.split(" ");
    for(var i = 0; i < str.length ; i++){
       if(result.length < str[i].length){
           result = str[i];
       } 
    }
   console.log(result);
}
longest("chandu is a good boy");