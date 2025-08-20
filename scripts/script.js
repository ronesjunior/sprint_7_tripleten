const popup = document.querySelector(".popup"); // querySelector para o pop-up
const editButton = document.querySelector(".info__image-button"); // querySelector para o botão editar
const closeButton = document.querySelector(".popup__close-button"); // querySelector para o botão X

function openPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
