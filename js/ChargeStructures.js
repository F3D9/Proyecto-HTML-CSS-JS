export function ChargeStructures() {
    const Header = ` <header>
    <nav>
        <div class="logo">Logo</div>

        <ul class="enlaces">
            <a href="home.html">
                <li>Home</li>
            </a>
            <a href="productos.html">
                <li>Productos</li>
            </a>
            <a href="nosotros.html">
                <li>Nosotros</li>
            </a>
        </ul>

        <button class="boton"><a href="/">Ingresar</a></button>
    </nav>
</header>`
    const Footer = `<footer>
<div class="logo">Logo</div>
<ul class="enlaces">
    <li>Instagram</li>
    <li>Facebook</li>
    <li>otra red</li>
</ul>
<p class="copy">@2023 Todos los derechos reservados</p>

</footer>
`
    const body = document.querySelector("body")
    body.insertAdjacentHTML("afterbegin", Header)
    body.insertAdjacentHTML("beforeend", Footer)

}