const inputTipoComputador = document.getElementById("tipo-computador");
const inputMarcaPlaca = document.getElementById("marca-placa");
const inputMarcaProcessador = document.getElementById("marca-processador");
const inputAnosComputador = document.getElementById("anos-computador");
const btnSalvar = document.getElementById("adicionar");

let cardsProducts = [];

class Card {
    constructor(tipo, placa, processador, anos) {
        this.tipo = tipo;
        this.placa = placa;
        this.processador = processador;
        this.anos = anos;
    }
}

const listaCards = document.getElementById("lista-cards");
// Faz os cards
function cardComputador() {
    listaCards.innerHTML = "";

    cardsProducts.forEach((computador, index) => {
        const div = document.createElement("div");
        div.className = "listaCards";

        const divBotaoCard = document.createElement("div")
        divBotaoCard.className = "divBotaoCard";

        const nomeTipo = document.createElement("p");
        nomeTipo.innerText = `Tipo: ${computador.tipo}`;

        const nomeMarcaPlaca = document.createElement("p");
        nomeMarcaPlaca.innerText = `Placa: ${computador.placa}`;

        const nomeProcessador = document.createElement("p");
        nomeProcessador.innerText = `Processador: ${computador.processador}`;
        
        const anosComputador = document.createElement("p");
        anosComputador.innerText = `A ${computador.anos} anos`;

        const btnEditar = document.createElement("button");
        btnEditar.innerText = "Alterar";
        btnEditar.className = "botaoCard";
        btnEditar.onclick = () => editarComputador(index);

        const btnExcluir = document.createElement("button");
        btnExcluir.innerText = "Excluir";
        btnExcluir.className = "botaoCard";
        btnExcluir.onclick = () => excluirComputador(index);

        div.appendChild(nomeTipo);
        div.appendChild(nomeMarcaPlaca);
        div.appendChild(nomeProcessador);
        div.appendChild(anosComputador);
        div.appendChild(btnEditar);
        div.appendChild(btnExcluir);
        div.appendChild(divBotaoCard);
        divBotaoCard.appendChild(btnEditar);
        divBotaoCard.appendChild(btnExcluir);

        listaCards.appendChild(div);
    });
}
// Função de editar card
function editarComputador(index) {
    const computador = cardsProducts[index];
    inputTipoComputador.value = computador.tipo;
    inputMarcaPlaca.value = computador.placa;
    inputMarcaProcessador.value = computador.processador;
    inputAnosComputador.value = computador.anos;

    excluirComputador(index);
}

function excluirComputador(index) {
    cardsProducts.splice(index, 1);
    cardComputador();
}

// Evento de adicionar computador
btnSalvar.addEventListener("click", (e) => {
    e.preventDefault();

    const tipo = inputTipoComputador.value.trim();
    const placa = inputMarcaPlaca.value.trim();
    const processador = inputMarcaProcessador.value.trim();
    const anos = inputAnosComputador.value.trim();

    const novoCard = new Card(tipo, placa, processador, anos);
    cardsProducts.push(novoCard);
    cardComputador();

    // Limpar campos
    inputTipoComputador.value = "";
    inputMarcaPlaca.value = "";
    inputMarcaProcessador.value = "";
    inputAnosComputador.value = "";
});