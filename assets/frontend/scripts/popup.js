document.addEventListener("DOMContentLoaded", () => {
  const popupContainer = document.querySelector(".popup-container");
  const registerBtns = document.querySelectorAll("#register");

  const closePopup = (e) => {
    if (!e.target.closest(".form-signin")) popupContainer.classList.remove("active");
  };

  const openPopup = () => {
    popupContainer.classList.add("active");
  };

  popupContainer.addEventListener("click", closePopup);

  [...registerBtns].forEach((btn) => {
    btn.addEventListener("click", openPopup);
  });
});
