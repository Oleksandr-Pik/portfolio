const callBackForm = document.querySelector(".callback-form-container");
const requestRecived = document.querySelector("#request-recived");

const userName = document.querySelector("#callback-form-input-name");
const userEmail = document.querySelector("#callback-form-input-email");
const userPhone = document.querySelector("#callback-form-input-phone");

userPhone.addEventListener("click", () => {
  if (!userPhone.value.trim()) {
    userPhone.value = "+380";
  }
});

userPhone.addEventListener("blur", () => {
  if (userPhone.value === "+380") {
    userPhone.value = "";
  }
});

callBackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let hasError = false;

  if (!userName.value.trim()) {
    userName.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userName.classList.remove("callback-form-input-error");
  }

  if (!userEmail.value.trim() || !isEmailValid(userEmail.value)) {
    userEmail.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userEmail.classList.remove("callback-form-input-error");
  }

  if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
    userPhone.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userPhone.classList.remove("callback-form-input-error");
  }

  if (hasError) {
    return;
  }

  userName.value = "";
  userEmail.value = "";
  userPhone.value = "";

  requestRecived.classList.add("modal-active");

  setTimeout(() => {
    requestRecived.classList.remove("modal-active");
  }, 2000);
});

const isPhoneValid = (phone = "") => {
  const regexp =
    /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

  return phone.match(regexp);
};

function isEmailValid(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
