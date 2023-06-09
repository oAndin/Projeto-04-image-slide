console.log("Hello World!");

const botaoEsquerda = document.querySelector("#esquerda");
const botaoDireita = document.querySelector("#direita");
const botoes = document.querySelector(".botoes");
const evImage = document.querySelector("#images");

let fotos = ["1", "2", "3", "4"];

let contagem = 0;

botaoDireita.addEventListener("click", function esquerda() {
    contagem++;
    if(contagem>fotos.length-1) {
        contagem = 0;
    }
    evImage.style.background = `url("img/${fotos[contagem]}.png")`
})
botaoEsquerda.addEventListener("click", function esquerda() {
    contagem--;
    if(contagem<0){
        contagem = fotos.length-1;
    }
    evImage.style.background = `url("img/${fotos[contagem]}.png")`
})