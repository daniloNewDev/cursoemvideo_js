function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.png'
        document.body.style.backgroundColor = 'rgb(70, 142, 236)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = 'rgb(230, 171, 77)'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = 'rgb(95, 85, 85)'
    }

}