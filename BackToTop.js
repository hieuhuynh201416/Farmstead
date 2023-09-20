var scrollToTopButton = document.getElementById("movetop");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - 50); 
    }
}

scrollToTopButton.addEventListener("click", function() {
    scrollToTop();
});