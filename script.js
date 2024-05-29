//window.alert("meu código em javascript!") 
//palavra reservadas são palavras vindas do javascript ex: (Var) é uma palavra reservada//
//o nome da função tem quer ser parecido, igual a que eu criei no arquivo cursos_livres.html//
//os (id) serão manipulados aqui no js//
function mostraNumero() {
var input = document.getElementById("numero")
var exibe = document.getElementById("botao")
var resposta = document.querySelector("div#area-numero") //essa daqui ó
var pega_valor = input.value


if(pega_valor < 10){
    resposta.innerHTML = pega_valor

}
else if(pega_valor > 10){
window.alert("valores maiores que dez não devem ser mostrados")
}
//isso aí em cima é a estrutura de condição if
//tem que ser essa variável (resposta) porque ela que vai mostrar o conteudo que ta redirecionando
//console.log(pega_valor) eu posso usar para ver meu erro se der erro //isso mostra o valor da variavél lá no console
}
