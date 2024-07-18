// When the window is scrolled, this function is triggered
window.onscroll = () => {
    
    // Adjust the margin-top of the element with class "mountains" based on scroll position
    document.querySelector(".mountains").style.marginTop = scrollY / 2 + "px";
    
    // Adjust the margin-bottom of the element with class "stars" based on scroll position
    document.querySelector(".stars").style.marginBottom = scrollY / 2.5 + "px";
    
    // Adjust the margin-left of the element with class "stars" based on scroll position (negative for parallax effect)
    document.querySelector(".stars").style.marginLeft = -scrollY / 2 + "px";
    
    // Scale the element with class "cave" based on scroll position (scaling effect)
    document.querySelector(".cave").style.transform = "scale(" + (scrollY / 5000 + 1) + ")";
    
    // Rotate the element with class "moon" based on scroll position (rotating effect)
    document.querySelector(".moon").style.transform = "rotate(-" + (scrollY / 5.5) + "deg)";
    
    // Adjust the margin-top of the <h1> element inside an element with class "Home" based on scroll position
    document.querySelector(".Home h1").style.marginTop = scrollY / 1.3 + "px";
    
    // Adjust the opacity of the <h1> element inside an element with class "Home" based on scroll position (fading effect)
    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;
    
}

