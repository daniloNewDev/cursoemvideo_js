let valores = [8, 1, 7, 4, 2, 9]

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

//Esta sintaxe do "for" só funciona para Arrey e Objects.
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}