let valores = [8, 1, 7, 4, 2, 9]

//Buscando valores dentro de um vetor com indexOf():
console.log(valores.indexOf(2))
    //Caso o valor procurado não exista no vetor, o console.log retorna o valor -1.

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

//Esta sintaxe do "for" só funciona para Arrey e Objects.
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf())