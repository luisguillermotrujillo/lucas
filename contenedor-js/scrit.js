function abrirCerrar() {
    let bloque1 =
        document.getElementById('bloque')
    let menu =
        window.getComputedStyle(bloque1)
    let alto =
        menu.getPropertyValue('height')
    if (alto == '0px') {
        bloque1.style.height = '100px'
    }
    else {
        bloque1.style.height = '0px'
    }

}
