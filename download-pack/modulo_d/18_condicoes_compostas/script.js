/*function maiusculasVogais(texto) {
    let texto = ''
    let vogais = 'aeiou'
    let uppercase = vogais.toUpperCase()
    for (let i = 0; i < uppercase.length; i++) {
        if (vogais.includes(uppercase[i])) {
            texto = texto + uppercase[i]
        }
    }
    console.log(maiusculasVogais(texto))
    return texto
}
console.log(maiusculasVogais('Danilo'))*/

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}