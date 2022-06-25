const $formulario = document.querySelector('.formulario')
const $correo = document.querySelector('.formulario__entrada')

const correo = /^[áéíóúñüa-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[áéíóúñüa-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[áéíóúñüa-z0-9](?:[áéíóúñüa-z0-9-]*[áéíóúñüa-z0-9])?\.)+[áéíóúñüa-z0-9](?:[áéíóúñüa-z0-9-]*[áéíóúñüa-z0-9])?$/

$formulario.addEventListener('submit', e => {
    e.preventDefault()
    if (correo.test($correo.value)) {
        $formulario.submit()
    } else {
        $formulario.classList.add('formulario--activo')
        $correo.placeholder = "ejemplo@email.com"
        $correo.value = ""

    }
})

$correo.addEventListener('focus', () => {
    $formulario.classList.remove('formulario--activo')
    $correo.placeholder = "Correo electrónico"
})