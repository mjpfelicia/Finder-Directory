(function() {
    var menu = document.querySelector('.menu-resp');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();

const btn = document.querySelector(".menu-hidden");
btn.addEventListener("click", toggleMenu);


function toggleMenu() {
    let menu = document.querySelector(".navbar-collapse");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";

    }
}