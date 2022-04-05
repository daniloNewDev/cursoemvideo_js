//Atribuição Simples. A ordem de precedência executa as ações operando primeiramente:
// () o que está dentro de parenteses;
// ** Potência
// * / % multiplicação, divisão real e divisão inteira, neste caso aqui, as operações que forem declaradas primeiro na linha;
// + - opderações de soma e subtração.

var a = 5 + 3,
    b = a % 5,
    c = 5 * b ** 2,
    d = 10 - a / 2,
    e = 6 * 2 / d,
    f = b % e + 4 / e;

//auto-atribuições: