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
 
