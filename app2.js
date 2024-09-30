// // var inpValue = +prompt("Enter Value")


// for (var i = 1; i <= 9; i++) {
//     for (var j = 1;j<9; j++) {
//         document.write(" &nbsp;&nbsp; ")
        
//     }
    
//         for (var b = 9; b => ((2*i)-1); b-- ) {
//             document.write( " * ")
//         }
//         document.write("<br>")
      


// }
for(let i = 17; i>=1; i = i-2){

    for(let k = 17; k > i; k--){ // 
     document.write("&nbsp")
    }
    for(let j = 1; j<=i; j++){  // 4 <= 17
        document.write("*")
    }
   document.write("<br>")  
}