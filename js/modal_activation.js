document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".certificate-card");
  const modals = document.querySelectorAll(".modal");

  cards.forEach((card) => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    card.addEventListener("click", () => {
      modal.classList.add("is-active");
    });
  });

  modals.forEach((modal) => {
    modal.querySelector(".modal-background").addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
    modal.querySelector(".modal-close").addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  });
});
