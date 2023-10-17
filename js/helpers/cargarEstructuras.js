export function cargarEstructuras() {
    const Header = ` <header>
    <nav>
        <div class="logo">
            <img src="../images/TecnoTrendy-Logo.png" alt="Tecno Trendy">
        </div>

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
<div class="logo">
    <img src="../images/TecnoTrendy-Logo.png" alt="Tecno Trendy">
</div>
<ul class="enlaces">
    <i class="fa-brands fa-instagram fa-xl icon" style="color: #000000;" > <span>Instagram </span></i>
    <i class="fa-brands fa-square-facebook fa-xl icon" style="color: #000000;"><span>Facebook</span></i>
    <i class="fa-brands fa-linkedin fa-xl icon" style="color: #000000;"><span>Linkedin</span></i>
</ul>
<p class="copy">@2023 Todos los derechos reservados</p>

</footer>
`
    const body = document.querySelector("body")
    body.insertAdjacentHTML("afterbegin", Header)
    body.insertAdjacentHTML("beforeend", Footer)

}