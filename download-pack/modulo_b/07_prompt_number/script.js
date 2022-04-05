let n1 = Number(window.prompt('Digite um número: ')) //caso o n1 receba um valor do Prompt, o n1 recebe o valor String
let n2 = Number(window.prompt('Digite outro número: '))
let s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} igual a ${s}.`) //Concatenação; usando template strings.

//number + number (para adição)
//string + string (para concatenação)

//Para converter um String em Number é necessário usar os métodos:
//"Number.parseInt(n)" para número inteiro;
//"Number.parseFloat(n)" para número real. Letras maiúsculas.

//Atualmente o JS utiliza o método "Number(n)".

//Caso seja necessário converter de Number para String é usado o "n.toString()".