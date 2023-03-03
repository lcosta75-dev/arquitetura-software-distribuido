const calc = require("./meuModulo/funcoes")

const x = 10;
const y = 1;

const r1 = calc.add(x, y);
const r2 = calc.sub(x, y);

console.log("O valor da adição é: ", r1);
console.log("O valor da subtração é: ", r2);