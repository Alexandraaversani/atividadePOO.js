const pessoa = {
    primeiroNome: "Alexandra",
    sobrenome: "Aversani",
    idade: 16,
    corOlho: "castanho",
    altura: 162,
    dataNascimento: 10/12/2007,
    usaOculos: false,
    corPele: "branco",
    corFavorita: "azul",
    sexo: "Feminino",
};

//Primeira frase
console.log("a " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem " + pessoa.idade + " anos! ");

//Alterar um objeto
pessoa.sobrenome = "Cristina";

//Segunda frase
console.log(" 2 - A " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem " + pessoa.idade)