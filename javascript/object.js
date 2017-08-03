// var student = {
//     name: "chandra",
//     sclass: "V",
//     rollno: 12
// };
// function size(obj) {
//     var size = 0, key;
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) size++
//     }
//     return size;
// };
// size(student);
// console.log("before Deleting ", student, size);
// delete student.sclass;
// console.log("after deleting", student);
// var library = [
//     {
//         author: "bill agtes",
//         title: "the road Ahead",
//         readingStatus: true
//     },
//     {
//         author: "Steve jobs",
//         title: "walter isaacson",
//         readingStatus: true
//     },
//     {
//         author: "suzanne collins",
//         title: "Mocking jay",
//         readingStatus: false
//     }
// ];
// for (var i = 0; i < library.length; i++) {
//     console.log(library[i].author, library[i].title, library[i].readingStatus);
// }
function volume(r, h) {
    var volume = Math.PI * r * r * h;
    console.log(volume.toFixed(4));
};
volume(3,4);

dacsc










