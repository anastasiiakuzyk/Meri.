document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mob_menu")
    const links = menu.querySelectorAll("a");
    burger.addEventListener("click", function (){
        burger.classList.toggle("active");
        menu.classList.toggle("active")
    });
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            burger.classList.remove("active");
            menu.classList.remove("active")
        });
    }
});

