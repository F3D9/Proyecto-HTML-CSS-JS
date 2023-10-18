import { cargarEstructuras } from "./helpers/cargarEstructuras.js";
import { falsoLogin } from "./helpers/loginFalso.js";
import { movimientoCarrusel } from "./helpers/movimientoCarrusel.js";


document.addEventListener("DOMContentLoaded", e => {
    cargarEstructuras(),
        falsoLogin(),
        movimientoCarrusel()
})