// Abrir popup para editar nome e sobre mim

const popup = document.querySelector(".popup");
const editBotao = document.querySelector(".profile__image-button");
const fecharBotao = document.querySelector(".popup__fechar-botao");

function abrirPopup() {
  popup.style.display = "flex";
}

function fecharPopup() {
  popup.style.display = "none";
}

editBotao.addEventListener("click", abrirPopup);
fecharBotao.addEventListener("click", fecharPopup);

///////////////////////////////////////////////////////////////////////////
// Alterar nome e sobre mim quando clicar no botão salvar do popup

let formElement = document.querySelector("#popup__form");

function AlterarPerfilFormSubmit(evt) {
  evt.preventDefault();

  let entradaNome = document.querySelector("#nome");
  let entradaSobre = document.querySelector("#sobre");

  let valorNome = entradaNome.value;
  let valorSobre = entradaSobre.value;

  let perfilNome = document.querySelector(".profile__title");
  let perfilSobre = document.querySelector(".profile__description");

  perfilNome.textContent = valorNome;
  perfilSobre.textContent = valorSobre;

  fecharPopup();

  // let entradaNome = document.querySelector("#nome").value;
  // let entradaSobre = document.querySelector("#sobre").value;

  // document.querySelector(".profile__title").textContent = entradaNome;
  // document.querySelector(".profile__description").textContent = entradaSobre;

  // fecharPopup();
}

formElement.addEventListener("submit", AlterarPerfilFormSubmit); // Conecta a função ao formulário

///////////////////////////////////////////////////////////////////////////
// Botão "like" da section "element" mudar a cor para black quando clicado

// const likeButton = document.querySelector(".element__like-icon");

// likeButton.addEventListener("click", function () {
//   this.classList.toggle("element__like-icon_active");
// });
