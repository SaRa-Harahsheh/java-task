

// // let myClassElement = document.getElementsByClassName("input");
// // myclassElement.onmouseover= function() {
// //     document.write("helkoooooooooo");   
// // }

// function classelement(){
//     document.getElementsByClassName("input").innerHTML="SARA"

// }


function changeFont() {
    let selectedFontFamily = document.getElementById("Family").value;
    document.getElementById("p").style.fontFamily = selectedFontFamily;

}

function changeSize() {
    let selectedFontSize = document.getElementById("Size").value;
    document.getElementById("p").style.fontSize = selectedFontSize;
}


function changeToItalic() {
    // document.getElementById("p").style.fontStyle="italic";
    if (document.getElementById("italic").checked) {
        document.getElementById("p").style.fontStyle = "italic";

    }
    else {
        document.getElementById("p").style.fontStyle = "normal";

    }


}

function changeToBold (){
    if (document.getElementById("bold").checked) {
        document.getElementById("p").style.fontWeight="Bold";
    }
    else{
        document.getElementById("p").style.fontWeight= "normal" ;
    }

}


function changeToUnderline(){
    if ( document.getElementById("underline").checked) {
        document.getElementById("p"). style.textDecoration ="Underline";
    }
    else {
        document.getElementById("p").style.textDecoration ="none" ;
    }

}
