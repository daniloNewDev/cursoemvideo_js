function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}
console.log(soma(2, 5))

//Um recurso da função de soma pode conter um par de parametros, e o navegador ao ler eventualmente apenas 1 valor preenchido no parâmetro da função como NaN. Adicionando o parâmetro opcional como o "=0" ajuda a encurtar o código.