window.onload = function(){
    var contents = document.getElementsByClassName("project-content");
    var sections = document.getElementsByClassName("collapsible");
    var i, content;
    
    for (i = 0; i < sections.length; i++) {
       
        sections[i].onclick = function() {
        content = this.nextElementSibling;
        //content.classList.toggle("isClicked");
        console.log(content.style.scrollHeight);
       content.style.maxHeight = content.style.scrollHeight + "px";

        };
    }
}