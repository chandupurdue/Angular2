function vowel(str){
      var str = str.toLowerCase();    
       var vowel = 'aeiou';
       var i = 0;
       for(var x = 0;  x < str.length;x++){
           if(vowel.indexOf(str[x]) !== -1){
               i++;
           }
       }
       return i;
}
console.log(vowel("chandrsa is good bioy"));