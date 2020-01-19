function bold(){
    var text = document.getElementById("mytext");
    text.style.fontWeight="bold";
}
function italic(){
    var text = document.getElementById("mytext");
    text.style.fontStyle="italic";
}
function underline(){

    document.getElementById("mytext").style.textDecoration="underline";
}
function changeSize(){
    var text =document.getElementById("mytext");
    var selec = document.getElementById("size");
    if (selec.options[selec.selectedIndex].value =="20"){
        text.style.fontSize = "20px";
    }
     if (selec.options[selec.selectedIndex].value =="30"){
        text.style.fontSize = "30px";
    } 
    if (selec.options[selec.selectedIndex].value =="60"){
        text.style.fontSize = "60px";
    } 
}
function change(){
    var text = document.getElementById("mytext");
    var selec = document.getElementById("police");
    if (selec.options[selec.selectedIndex].value =="arial"){
        text.style.fontFamily = "Arial";
    }
    if (selec.options[selec.selectedIndex].value =="verdana"){
        text.style.fontFamily = "Verdana";
    }
    if (selec.options[selec.selectedIndex].value =="Geneva"){
        text.style.fontFamily = "Geneva";
    }
}

$(document).ready(function(){
    
    $("center img").mouseenter(function(){
        this.style.opacity = 0.5;
    })

    $("center img").mouseleave(function(){
        this.style.opacity = 1;
    })
  
})

