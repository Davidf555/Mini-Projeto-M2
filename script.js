function abrirModal(){
const btnAdicionar = document.getElementById("btn-adicionar");
const dialog = document.getElementById("modal-adicionar-card");


// Faz aparecer a tela para colocar as imformações ao clicar o botão
btnAdicionar.addEventListener("click", ()=>{
    dialog.showModal();
});
// Faz a tela sumir ao clicar o botão

}
abrirModal();

const inputTipoComputador = document.getElementById("tipo-computador");
const inputMarcaPlaca = document.getElementById("marca-placa");
const inputMarcaProcessador = document.getElementById("marca-processador");
const inputAnosComputador = document.getElementById("anos-computador");
const btnSalvar = document.getElementById("salvar");

let cardsProducts = [];
class Card {
    constructor(inputTipoComputador, inputMarcaProcessador, inputMarcaPlaca, inputAnosComputador){
        this.inputTipoComputador = inputTipoComputador;
        this.inputMarcaPlaca = inputMarcaPlaca;
        this.inputMarcaProcessador = inputMarcaProcessador;
        this.inputAnosComputador = inputAnosComputador;
    }
}

const meuForm = document.querySelector("form");
meuForm.addEventListener("submit", function postControler(infosDoEvento){
    infosDoEvento.preventDefault();
    console.log("novo card")

    const card1 = new Card(inputTipoComputador.value,inputMarcaPlaca.value, inputMarcaProcessador.value, inputAnosComputador.value);
    cardsProducts.push(card1);

    const listaCards = document.getElementById("lista-cards");
    listaCards.insertAdjacentHTML("afterbegin", `<ul class="listaCards">
        
        <p>Tipo de computador:</p>
        <p>${inputTipoComputador.value}</p>
        <p>Marca da placa de video:</p>
        <p>${inputMarcaPlaca.value}</p>
        <p>Marca do processador:</p>
        <p>${inputMarcaProcessador.value}</p>
        <p>Quantos anos você tem esse computador:</p>
        <p>${inputAnosComputador.value}</p>

        <button>Editar</button>
        <button>Apagar</button>
        
        <ul>`)
    console.log(cardsProducts)
})

// btnSalvar.addEventListener("click", ()=>{
//     const card1 = new Card(inputTipoComputador.value,inputMarcaPlaca.value, inputMarcaProcessador.value, inputAnosComputador.value);
//     cardsProducts.push(card1);
// });

