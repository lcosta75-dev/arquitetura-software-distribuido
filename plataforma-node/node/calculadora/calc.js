function adicao(n1, n2){
    return n1 + n2;
}

function subtracao(n1, n2){
    return n1 - n2;
}

function multiplicacao(n1, n2){
    return n1 * n2;
}

function divisao(n1, n2){
    return n1 / n2;
}

module.exports = {
    add: adicao,
    sub: subtracao,
    mult: multiplicacao,
    div: divisao
}