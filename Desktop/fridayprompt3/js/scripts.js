
var number = 11;
var arr = []
for (var i = number; i > 0; i--){
  arr.push(i)
}
 console.log(arr)
arr.forEach(function(num){
  if (num == 11){

    num = "beep"
    arr.push(num)
  }
})


console.log(arr)
