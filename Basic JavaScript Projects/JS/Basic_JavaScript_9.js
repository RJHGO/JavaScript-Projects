function countdown(){
    var seconds = document.getElementById("seconds").value;
    
    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if(seconds == -1){
            alert("Time's up!");
        }
    } 
    tick();
}

var slideIndex = 1;
showSlides(slidesIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var x;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for(x = 0; x < slides.length; x++){
        slides[x].style.display = "none";
    }

    for (x = 0; x < dots.length; x++) {
        dots[x].className = dots[x].className.replace("active", "");

    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}