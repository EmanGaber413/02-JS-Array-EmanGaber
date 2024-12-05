
function button2func() {
    


var arr2 =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


var item = null

var times=0

for (var index = 0; index < arr2.length; index++) {
  var temp =arr2[index]
  var count =0
  for (var j =0 ; j<arr2.length ; j++)
     {
    if (arr2[index]==arr2[j])
      {  count++ ;}
      
  }
  if (count>=times)
     {times=count , 
    item=temp}
  
  }

document.write(item,times)


}