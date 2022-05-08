//variavel de escopo let
let nome = "zulily";

console.log(nome)

//não pode ser redeclarada
//var nome = "zulily"

const nomelocal = function(){

    let nome = "zulily";

    console.log(nome)
}