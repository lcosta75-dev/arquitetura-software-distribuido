const fs = require( "fs");

fs.mkdir("./teste", function() {
    console.log("Criei o diretório teste");
});

fs.writeFile("./teste/abcd.txt", "Olá tudo bem?", function() {
    console.log("Criei um novo arquivo no diretório teste com o nome abcd.txt");
});

fs.readFile("./teste/abcs.txt", function(err, data) {
    console.log("O meu arquivo possui os dados: ", data.toString());
});