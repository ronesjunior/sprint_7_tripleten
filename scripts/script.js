// Abrir popup para editar nome e sobre mim

const popup = document.querySelector(".popup");
const editBotao = document.querySelector(".info__image-botao");
const fecharBotao = document.querySelector(".popup__fechar-botao");

function abrirPopup() {
  popup.style.display = "flex";
}

function fecharPopup() {
  popup.style.display = "none";
}

editBotao.addEventListener("click", abrirPopup);
fecharBotao.addEventListener("click", fecharPopup);

// Alterar nome e sobre mim quando clicar no botão salvar do popup

let formElement = document.querySelector("#popup__form");

function AlterarPerfilFormSubmit(evt) {
  evt.preventDefault();

  let entradaNome = document.querySelector("#nome");
  let entradaSobre = document.querySelector("#sobre");

  let valorNome = entradaNome.value;
  let valorSobre = entradaSobre.value;

  let perfilNome = document.querySelector(".info__jacques-costeau");
  let perfilSobre = document.querySelector(".info__explorador");

  perfilNome.textContent = valorNome;
  perfilSobre.textContent = valorSobre;

  closePopup();
}

formElement.addEventListener("submit", AlterarPerfilFormSubmit); // Conecta a função ao formulário
