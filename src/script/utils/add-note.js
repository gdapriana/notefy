import { POST_CREATE_NOTES } from "../api/services";

const form = document.querySelector("#create-form");

const inputTitle = document.querySelector("#title");
inputTitle.addEventListener("blur", (e) => {
  const isValid = (event) => {
    return {
      valid: event.target.validity.valid,
      message: event.target.validationMessage,
      connectedValidationId: event.target.getAttribute("aria-describedby"),
    };
  };
  const { valid, message, connectedValidationId } = isValid(e);
  const connectedValidation = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : false;
  if (connectedValidation) {
    if (connectedValidation && message && !valid) {
      connectedValidation.innerText = message;
      inputTitle.classList.add("invalid");
    } else {
      connectedValidation.innerText = "";
      inputTitle.classList.remove("invalid");
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const body = document.querySelector("#body");
  POST_CREATE_NOTES({ title: title.value, body: body.value }).then();
  title.value = "";
  body.value = "";
});
