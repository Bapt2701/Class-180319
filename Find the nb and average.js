var x = parseInt (prompt ("please enter number",0))

var myArray = []


while (x != -1)
  {
    myArray.push(x)
    x = parseInt (prompt ("please enter number",0))
  }


var sum = 0
for(var i = 0; i < myArray.length; i = i + 1)
  {
   
   sum = sum + myArray[i]
  }

console.log(sum)
