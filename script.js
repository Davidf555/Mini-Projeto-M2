const btnAdicionar = document.getElementById("btn-adicionar");
const dialog = document.getElementById("modal-adicionar-card");
const fecharModal = document.getElementById("fechar-modal");

btnAdicionar.addEventListener("click", ()=>{
    dialog.showModal();
});

fecharModal.addEventListener("click", ()=>{
    dialog.close();
});

