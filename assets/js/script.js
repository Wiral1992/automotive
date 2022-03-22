let wrapper = document.querySelector("#wrapper"),
    header = document.querySelector("#header"),
    about = document.querySelector("#about");

document.addEventListener("scroll", function() {
    let aboutHeight = about.offsetHeight;
    console.log(aboutHeight);
    header.classList.add("red-header");
});