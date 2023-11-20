function changeImage(){
    element = document.getElementById("myimage");
    if(element.src.match("bulbon")){
        element.src = "";
    }else{
        element.src = "";
    }
}