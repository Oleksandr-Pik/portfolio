const projectModalWebStudio = document.querySelector(
  "#personal-project-webstudio"
);
const projectModalBarberShop = document.querySelector(
  "#personal-project-barbershop"
);
const projectModalAdilat = document.querySelector("#personal-project-adilat");

const projectModalPhoneBook = document.querySelector("#team-project-phonebook");

const projectModalMovies = document.querySelector("#team-project-movies");

const projectOpenBtnWebStudio = document.querySelector(
  "#personal-project-webstudio-btn"
);
const projectOpenBtnBarberShop = document.querySelector(
  "#personal-project-barbershop-btn"
);
const projectOpenBtnAdilat = document.querySelector(
  "#personal-project-adilat-btn"
);
const projectOpenBtnPhoneBook = document.querySelector(
  "#team-project-phonebook-btn"
);
const projectOpenBtnMovies = document.querySelector(
  "#team-project-movies-btn"
);

const projectModals = [
  projectModalWebStudio,
  projectModalBarberShop,
  projectModalAdilat,
  projectModalPhoneBook,
  projectModalMovies,
];

const projectBtns = [
  projectOpenBtnWebStudio,
  projectOpenBtnBarberShop,
  projectOpenBtnAdilat,
  projectOpenBtnPhoneBook,
  projectOpenBtnMovies,
];

projectBtns.forEach((btn, index) => {
  const projectModal = projectModals[index];

  if (btn) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      projectModal.classList.add(MODAL_ACTIVE_CLASS);

      document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
    });
  }
});
