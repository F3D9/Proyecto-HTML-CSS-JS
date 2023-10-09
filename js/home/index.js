import { ChargeStructures } from "../ChargeStructures.js";
import { carruselMovement } from "../CarruselMovement.js";

const d = document,
    w = window;

d.addEventListener("DOMContentLoaded", (e) => {
    ChargeStructures(),
        carruselMovement()
})