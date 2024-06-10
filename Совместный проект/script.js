window.addEventListener("DOMContentLoaded", () => {
    // slider
    const swiper = new Swiper(".mySwiper", {
        loop: true,// МОЖНО УБРАТЬ!!!!!!!!!!!!!!!!!1
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });

    // modals
    const regModal = document.querySelector("#reg-modal");
    const openRegModal = document.querySelector(".openModal");
    const closeRegModal = document.querySelector(".modal-close");
    const btnRegModal = document.querySelector(".modal-button");

    // open modal
    openRegModal.addEventListener("click", (e) => {
        e.preventDefault();
        regModal.classList.add("active");
    });

    // close modal
    closeRegModal.addEventListener("click", (e) => {
        // e.preventDefault();
        regModal.classList.remove("active");
    });
    // close modal
    btnRegModal.addEventListener("click", (e) => {
        // e.preventDefault();
        regModal.classList.remove("active");
    });
});

// regModals.

window.addEventListener("DOMContentLoaded", () => {
    const portfolioModal = document.querySelector("#portfolio-modal"); //вся модалка
    const btnPortfolio = document.getElementById("btnportfolio"); //кнопка открытия
    const closePortfolioModal = document.getElementById("close_modal"); //кнопка закрытия

    btnPortfolio.addEventListener("click", openModal);

    function openModal() {
        portfolioModal.style.display = "flex";
    }

    closePortfolioModal.addEventListener("click", closeModal);

    function closeModal() {
        portfolioModal.style.display = "none";
    }
});
