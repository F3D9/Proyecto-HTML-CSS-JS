export function falselogin() {

    let buttonSend = document.querySelector("#boton_form")
    document.addEventListener("click", e => {
        console.log(buttonSend)
        if (e.target === buttonSend) {
            const form = document.querySelector("form")
            e.preventDefault()
            if (form.usuario.value && form.contraseña.value) {
                window.location.href = "/home.html"
            }
        }
    })
}