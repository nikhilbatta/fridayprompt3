var number = 1;
var arr = []
for (var i = number; i > 0; i--){
  arr.push(i)
}
 console.log(arr)
arr.forEach(function(num){
  if (num == 1){

    arr[num]= "beep"
    arr.push(arr[num])
  }
})


console.log(arr)
 // try two
var number = 19;
var arr = []
for (var i = 0; i<number; i++){
  arr.push(i)

}
lookForNumbers()
function lookForNumbers(){
 var index = arr.indexOf(1)
if(index>-1){
 return arr.splice(index,1)
}
}
// try three
var number = 113;
var arr = []

for (var i = 0; i<number; i++){
  arr.push(i)

}
var slicer = arr.toString();
lookForNumbers()

function lookForNumbers(){
 slicer = slicer.replace(1,"beep")
 slicer = slicer.replace(2,"boop")
 slicer = slicer.replace(3,"Im sorry dave, I cant do that")
 slicer = slicer.replace(13,"Im sorry dave,I cant do that")
 slicer = slicer.replace(21,"Boop")
 slicer = slicer.replace(32, "Im sory dave i cant do that")
}


 console.log(slicer)
