$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
  var number = parseInt($("#grabNumber").val());
  $("formOne").append("<li>" + slicer + "</li>")
});
});
// try three
var arr = []
var number = ""
for (var i = 0; i<number; i++){
  arr.push(i)
}
var slicer = arr.toString();

function lookForNumbers(){

 slicer = slicer.replace(1,"beep")
 slicer = slicer.replace(2,"boop")
 slicer = slicer.replace(3,"Im sorry dave, I cant do that")
 slicer = slicer.replace(13,"Im sorry dave,I cant do that")
 slicer = slicer.replace(21,"Boop")
 slicer = slicer.replace(32, "Im sory dave i cant do that")
}
return slicer;
lookForNumbers()
 console.log(slicer)
