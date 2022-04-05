let num = document.getElementById('num')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { //limite de caracteres...
        return true
    } else {
        return false
    }

}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) { //numero não encontrado na lista.
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = '' //Para zerar a lista
    } else {
        alert('Valor inválido ou já adicionado a lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for (let pos in valores) { //laço de percurso
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]



        }
        media = soma / tot
        res.innerHTML = '' //para zerar a lista
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos adicinados.</p>`
        res.innerHTML += `<p>O ${menor} é o menor valor adicionado.</p>`
        res.innerHTML += `<p>O ${maior} é o maior valor adicionado.</p>`
        res.innerHTML += `<p>A soma de todos os elemetos é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`

    }
}