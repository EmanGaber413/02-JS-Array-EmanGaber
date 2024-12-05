function button3func() {
  var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
   var o = ["th","st","nd","rd"]
   var say =[0]

for (let i = 0; i < color.length; i++) {
    
//     if (i===1) {document.write(i+o[i]+"choice is"+color[i])  };
//     else if (index===2) {document.write(index+o[index]+"choice is"+color[index])  };
//    else if (index===3){document.write(index+o[index]+"choice is"+color[index])  };
//     else{document.write(index+o[index]+"choice is"+color[index])  };


   switch (i) {
    case 0: say=o[1]
    

    
    case 1:say =o[2]
    break;
    
   
    case 2:say =o[3]
    break;
    
    
   
    default:say= o[0]
       
   
   }
   document.write(i+1+say+'choice is '+color[i])
   document.write ("<br>")
   
}}