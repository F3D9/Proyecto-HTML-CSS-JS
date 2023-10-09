export function carruselMovement() {
    const grande = document.getElementById("grande")
    const punto = document.getElementsByClassName("punto")
    for (let i = 0; i < punto.length; i++) {
        punto[i].addEventListener("click", () => {
            let posicion = i
            let operacion = posicion * -25

            grande.style.transform = `translateX(${operacion}%)`

            for (let j = 0; j < punto.length; j++) {
                punto[j].classList.remove('activo')
            }
            punto[i].classList.add('activo')
        })
    }
}