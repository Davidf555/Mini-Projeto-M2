function abrirModal(){
const btnAdicionar = document.getElementById("btn-adicionar");
const dialog = document.getElementById("modal-adicionar-card");
const fecharModal = document.getElementById("fechar-modal");


// Faz aparecer a tela para colocar as imformações ao clicar o botão
btnAdicionar.addEventListener("click", ()=>{
    dialog.showModal();
});
// Faz a tela sumir ao clicar o botão
fecharModal.addEventListener("click", ()=>{
    dialog.close();
});
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
        <p><strong>${inputTipoComputador.value}</strong></p>
        <p>Marca da placa de video:</p>
        <p><strong>${inputMarcaPlaca.value}</strong></p>
        <p>Marca do processador:</p>
        <p><strong>${inputMarcaProcessador.value}</strong></p>
        <p>Quantos anos você tem esse computador:</p>
        <p>Seu computador tem <strong>${inputAnosComputador.value}</strong> anos</p>
        <div class="bnt-model-card">
        <button class="bnt-model">Editar</button>
        <button class="bnt-model">Apagar</button>
        </div>
        <ul>`)
    console.log(cardsProducts)
})


