let sendToTop = document.getElementById("logo")

sendToTop.addEventListener('click', toTop)

// When the user clicks on the button, scroll to the top of the document
function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// used for the typing animation
window.ityped.init(document.querySelector('.ityped'), {
    strings: ["Sander Verhoeven"],
    loop: true,
    typeSpeed: 200,
    backSpeed: 100,
})