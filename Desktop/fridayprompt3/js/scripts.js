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
