function submit(){
    var newrec=document.getElementById("txtarea").value;
    if( newrec !=''){
    var para=document.getElementById("rec3");
    var newpara=document.createElement("p");
    newpara.innerHTML=newrec;
    newpara.classList.add("rec");
    para.parentNode.insertBefore(newpara,para.nextSibling);
    document.getElementById("overley").style.display="flex";
    
}

}
function closeup() {
    document.getElementById("overley").style.display = "none";
}
function scrollToTop() {
    
    var element = document.getElementById("home");

    
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}