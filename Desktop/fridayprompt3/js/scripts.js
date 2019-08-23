$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
  var number = parseInt($("#grabNumber").val());
  var startOfLogic = firstFunction(number)
  $("#formOne").append("<li>" + lookForNumbers() + "</li>")
});
});
// try three
var arr = []
function firstFunction(userNumber){
for (var i = 0; i<userNumber; i++){
  arr.push(i)
}
console.log(arr)
return arr;
lookForNumbers();
}
function lookForNumbers(){
  var slicer = arr.toString();
 slicer = slicer.replace(1,"beep")
 slicer = slicer.replace(2,"boop")
 slicer = slicer.replace(3,"Im sorry dave, I cant do that")
 slicer = slicer.replace(13,"Im sorry dave,I cant do that")
 slicer = slicer.replace(21,"Boop")
 slicer = slicer.replace(32, "Im sory dave i cant do that")
 return slicer;
}
