// var inpValue = +prompt("Enter Value")


// for (var i = 1; i <= inpValue; i++) {
//     for (var j = inpValue;j>i; j--) {
//         document.write(" &nbsp;&nbsp; ")
        
//     }
    
//         for (var b = 1; b <= ((2*i)-1); b++ ) {
//             document.write( " * ")
//         }
//         document.write("<br>")
      


// }
for(let i = 1; i<=17; i = i+2){

    for(let k = i; k<17; k++){
     document.write("&nbsp")
}
    for(let j = 1; j<=i; j++){
        document.write("*")
    }
   document.write("<br>")  
}
