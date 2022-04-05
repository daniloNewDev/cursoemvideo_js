function caminhar() {
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('result')

    if (inicio.value <= 0 || inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = `Valor Inválido!`
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
            //full emoji list
        for (let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} \u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
    }


}