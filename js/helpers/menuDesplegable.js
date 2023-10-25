export function menuDesplegable() {
    const menuHamburguer = document.querySelector(".menu")
    const menuCross = document.querySelector(".cross")
    const opcionesMenu = document.querySelector(".enlaces")

    menuHamburguer.addEventListener("click", (e) => {
        opcionesMenu.style.display = "flex"
        menuCross.style.display = "flex"
        menuHamburguer.style.display = "none"
    })
    menuCross.addEventListener("click", (e) => {
        opcionesMenu.style.display = "none"
        menuCross.style.display = "none"
        menuHamburguer.style.display = "flex"
    })
}