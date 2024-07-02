function scrollleft() {
    const scroller = document.querySelector('.modal.active .media-scroller');
    if (scroller) {
        scroller.scrollBy({ left: -scroller.offsetWidth, behavior: 'smooth' });
    }
}

function scrollRight() {
    const scroller = document.querySelector('.modal.active .media-scroller');
    if (scroller) {
        scroller.scrollBy({ left: scroller.offsetWidth, behavior: 'smooth' });
    }
}

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const overlay = document.getElementById("overlay");
const imageInfos = document.querySelectorAll('.image-info');

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal, button);
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
        closeModal(modal);
    });
});

function openModal(modal, button) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
    imageInfos.forEach(info => {
        const infoText = info.querySelector('.info-text');
        if (infoText) {
            infoText.classList.add('hide');
        }
        info.style.zIndex = '0';
    });

    // Set the z-index of the active modal's image info to 1
    const activeImageInfo = button.closest('.image-info');
    if (activeImageInfo) {
        activeImageInfo.style.zIndex = '1';
    }
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
    imageInfos.forEach(info => {
        const infoText = info.querySelector('.info-text');
        if (infoText) {
            infoText.classList.remove('hide');
        }
        info.style.zIndex = '1';
    });
}
