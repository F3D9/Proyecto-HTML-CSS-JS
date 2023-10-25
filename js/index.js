import { cargarEstructuras } from "./helpers/cargarEstructuras.js";
import { cargarProductos } from "./helpers/cargarProductos.js";
import { falsoLogin } from "./helpers/loginFalso.js";
import { movimientoCarrusel } from "./helpers/movimientoCarrusel.js";
import {cargarProductosHome} from "./helpers/cargarProductosHome.js";

document.addEventListener("DOMContentLoaded", e => {
    cargarEstructuras(),
        falsoLogin(),
        movimientoCarrusel(),
        cargarProductosHome(),
        cargarProductos()
})