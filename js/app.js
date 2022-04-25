let homeNav = document.getElementById("homeNav");
let aboutNav = document.getElementById("aboutNav");
let projectsNav = document.getElementById("projectsNav")
let contactNav = document.getElementById("contactNav")

//making the elements clickable
homeNav.addEventListener("click", function () {
    toTop(homeNav.innerHTML);
});
aboutNav.addEventListener("click", function () {
    toTop(aboutNav.innerHTML);
});
projectsNav.addEventListener("click", function () {
    toTop(projectsNav.innerHTML);
});
contactNav.addEventListener("click", function () {
    toTop(contactNav.innerHTML);
});

// When the user clicks on the button, scroll to the top of the document
function toTop(name) {
    // getting the height of the navbar
    let height = document.querySelector('#navBar').offsetHeight

    // checking if the name lines up with expected value
    switch (name) {
        case 'Sander':
            let content = document.getElementById("content")
            let contentPos = content.offsetTop
            window.scrollTo(0, contentPos);
            break;

        case 'About':
            let about = document.getElementById("about")
            let aboutPos = about.offsetTop - height;
            window.scrollTo(0, aboutPos);
            break;

        case 'Projects':
            let projects = document.getElementById("projects")
            let projectsPos = projects.offsetTop - height;
            window.scrollTo(0, projectsPos);
            break;

        case 'Contact':
            console.log('Contact')
            break;

        default:
            console.log('no')
            break;

    }
}

// used for the typing animation
window.ityped.init(document.querySelector('.ityped'), {
    strings: ["Sander Verhoeven"],
    loop: true,
    typeSpeed: 200,
    backSpeed: 100,
})