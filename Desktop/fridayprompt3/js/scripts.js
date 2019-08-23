$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
  var number = parseInt($("#grabNumber").val());
  $("#formOne").append("<li>" + firstFunction(number)  + "</li>")
  $("#grabNumber").val('');
});
});
// try three

function firstFunction(userNumber){
var arr = []
for (var i = 0; i<=userNumber; i++){
  arr.push(i)
}
console.log(arr)

return lookForNumbers(arr);
}
function lookForNumbers(arr){
  var name = $("#name").val()
  // var slicer = arr.toString();
for (var j=0;j<arr.length;j++){
    var numString = arr[j].toString()
    if(numString.includes("3")){
      arr[j] = " I'm sorry, "  + name + ". I'm afraid I can't do that. "
    }
    else if (numString.includes("2")) {
      arr[j]= " boop ";
    }
    else if(numString.includes("1")){
    arr[j]= " beep ";
  }
  else{
    arr[j] =  " " + numString;
  }
}
return arr;
}
 //
 //
 //  slicer = slicer.replace(1,"beep")
 // slicer = slicer.replace(2,"boop")
 // slicer = slicer.replace(3,"Im sorry dave, I cant do that")
 // slicer = slicer.replace(13,"Im sorry dave,I cant do that")
 // slicer = slicer.replace(21,"Boop")
 // slicer = slicer.replace(32, "Im sory dave i cant do that")
