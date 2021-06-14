"use strict";

document.addEventListener("DOMContentLoaded", ()=> {
  const selectToggle = document.querySelector(".custom-select__toggle");
  const selectOptions = document.querySelector(".custom-select__list");
  selectToggle && selectToggle.addEventListener("click", () => {
    selectToggle.getAttribute("aria-expanded") === "false" ? selectToggle.setAttribute("aria-expanded", "true"): selectToggle.setAttribute("aria-expanded", "false");
  });
  selectOptions && selectOptions.addEventListener("change", (evt) => {
    const target = evt.target;
    if (target.classList.contains("custom-select__radio")) {
      selectToggle.textContent = target.nextElementSibling.textContent;
      selectToggle.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener('click', (evt) => {
    const target = evt.target;
    const itsSelectOptions = target == selectOptions || selectOptions.contains(target);
    const itsSelectToggle = target == selectToggle;
    const selectOptionsOpened = selectToggle.getAttribute("aria-expanded") === "true";

    if (!itsSelectOptions && !itsSelectToggle && selectOptionsOpened) {
      selectToggle.setAttribute("aria-expanded", "false");
    }
  })
  new Swiper('.products__slider', {
    slidesPerColumn: 2,
    slidesPerView: 5,
    slidesPerGroup: 10,
    slidesPerColumnFill: "row",
    navigation: {
      nextEl: '.products__button--next',
      prevEl: '.products__button--prev',
    },
  });
  new GraphModal({
    isOpen: (modal) => {
      modal.previousActiveElement.setAttribute("aria-expanded", true);
    },
    isClose: (modal) => {
      modal.previousActiveElement.setAttribute("aria-expanded", false);
    }
  });
});
