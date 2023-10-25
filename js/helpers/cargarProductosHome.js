async function traerLosProductos() {
    try {
        let productos = await fetch("../../Productos.json")
        let data = await productos.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

export async function cargarProductosHome() {
    let seccionProductos = document.querySelector("#Home")
    let loader = document.querySelector("#HomeLoader")
    let productos = await traerLosProductos()
    for (let i = 0; i < 3; i++) {
        let templateProductos = `
    <section class="producto-card">
        <span>${productos[i].categoria}</span>
        <img src=${productos[i].images[0]} alt="" />
        <div class="producto-informacion">
            <hr />
            <h2>${productos[i].producto}</h2>
            <strong>$ ${productos[i].precio}</strong>
        </div>
        <div class="botones-producto">
        <a class="boton-producto">Añadir al Carrito</a>
        <a class="boton-producto">Ver mas </a>
        </div>
        
    </section>
        `
        seccionProductos.insertAdjacentHTML("afterbegin", templateProductos)
    }
    loader.style.display = "none"
}