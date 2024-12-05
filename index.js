function button1func(){
var arr1=[-3,8,7,6,5,-4,3,2,1]

for (var index = 0; index < arr1.length ; index++) 
    {
    for (var j = 0 ; j < arr1.length; j++) 
        {
        if(arr1[index]<arr1[j])
            {
         var kobaya = arr1[index]
         arr1[index]=arr1[j]
         arr1[j]=kobaya
                               }
                                  }
                                    
                                }
document.write( arr1)



// document.write (arr1.sort((a,b)=>a-b))
}






