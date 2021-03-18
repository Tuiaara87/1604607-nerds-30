const btnOpen = document.querySelector(".address-button");
const modalWindow = document.querySelector(".modal-wrapper");
const btnClose = document.querySelector(".modal-close");
const modalForm = document.querySelector(".modal-box");
const modalName = document.querySelector(".name-field");
const modalEmail = document.querySelector(".login-field");

let isStoreageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStoreageSupport = false;
}

btnOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.add("modal-show");

    if (storage) {
        modalName.value = storage;
        modalEmail.focus();
    } else {
        modalName.focus();
    }

    modalName.focus();
});

btnClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-show");
    modalWindow.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
    if (!modalName.value || !modalEmail.value) {
        evt.preventDefault();
        modalWindow.classList.remove("modal-error");
        modalWindow.offsetWidth = modalWindow.offsetWidth;
        modalWindow.classList.add("modal-error");
    } else {
        if (isStoreageSupport) {
            localStorage.setItem("name", modalName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalWindow.classList.contains("modal-show")) {
            evt.preventDefault();
            modalWindow.classList.remove("modal-show");
        }
    }
})

