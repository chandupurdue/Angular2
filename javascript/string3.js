// function newString(string) {
//     var str1 = string.substring(0, 3);
//     console.log(str1 + string + str1);
// };
// newString("chandra");

function java(string) {
    var str = string.toLowerCase();
    var str = str.substring(0, 4);
    console.log((str === "java") ? "starts with java" : "donot start with java");
}
java("java chandra");
java("chnadra");