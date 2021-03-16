const btnOpen = document.querySelector(".address-button");
const btnClose = document.querySelector(".modal-close");
const modalWindow = document.querySelector(".modal-wrapper");

btnOpen.addEventListener("click", function (e) {
    e.preventDefault();
    modalWindow.classList.add("modal-show");
});

btnClose.addEventListener("click", function (e) {
    e.preventDefault();
    modalWindow.classList.remove("modal-show");
});

