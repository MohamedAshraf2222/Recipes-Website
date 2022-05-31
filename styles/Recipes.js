var textarea = document.getElementById("textarea");
var div = document.getElementById("div");

textarea.onkeyup = function(){
    'use strict';
    div.textContent = 50 - textarea.value.length;
    //  if(div.textContent < 0 ) {
    //      div.style.color = "red";
    //  }
    //  else if (div.textContent == 0 ){
    //     div.style.color = "green";
    // }
    //  else if(div.textContent > 0 ){
    //      div.style.color = "black";
    //  }
     
switch(div.textContent){
case "div.textContent < 0" :
    div.style.color = "red";
    break;
case "div.textContent > 0" :
    div.style.color = "black";
    break;
// case "div.textContent == 0" :
//     div.style.color = "green";
//     break;
default:
    div.style.color = "black";
    break;
}
};