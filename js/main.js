const abrir = document.getElementById("open");
const cerrar = document.getElementById("close");
const navbar = document.getElementById("navbar");

abrir.addEventListener("click", () => {
    navbar.classList.add("container__nav-visible");
})

cerrar.addEventListener("click", () => {
    navbar.classList.remove("container__nav-visible")
})