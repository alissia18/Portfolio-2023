
window.onload = function(){
    var cards = document.getElementsByClassName("imagecard");
    var i = 0;

    for(i = 0; i < cards.length; i++){
        console.log(cards[i]);
        cards[i].onclick = function(){
            console.log("clicked");
            this.classList.toggle("flip");
        };
    }
}
