let modalContainer = document.getElementById("modal-container");
let openBtn = document.querySelector("#open-btn");
let closeBtn = document.getElementById("close-btn");
let body = document.getElementsByTagName("body");

openBtn.addEventListener("click", (event) => {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", (event) => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", (element) => {
  if (element.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
