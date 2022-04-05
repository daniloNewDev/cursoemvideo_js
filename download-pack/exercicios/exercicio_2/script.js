function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Data inválida.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 12) {
                img.setAttribute('src', 'criancamas.png')
            } else if (idade > 18 && idade <= 34) {
                img.setAttribute('src', 'jovemmas.png')
            } else if (idade > 35 && idade <= 60) {
                img.setAttribute('src', 'adultomas.png')
            } else {
                img.setAttribute('src', 'idosomas.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade <= 12) {
                img.setAttribute('src', 'criancafem.png')
            } else if (idade > 18 && idade <= 35) {
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade > 36 && idade <= 60) {
                img.setAttribute('src', 'adultofem.png')
            } else {
                img.setAttribute('src', 'idosofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos usuário ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}