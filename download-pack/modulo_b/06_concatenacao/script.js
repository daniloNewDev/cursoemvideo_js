let nome = window.prompt("Qual é o seu nome?")
window.alert("É um grande prazer conhecê-lo " + nome + ".") //concatenação


//


let n1 = Number(window.prompt('Digite um número: ')) //caso o n1 receba um valor do Prompt, o n1 recebe o valor String
let n2 = Number(window.prompt('Digite outro número: '))
let s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} igual a ${s}.`) //Concatenação; usando template strings.