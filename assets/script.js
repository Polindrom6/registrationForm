const form = document.getElementById("registrationForm");
const inputs = form.querySelectorAll("input,select");
const submitBtn = document.getElementById("submitBtn");

function validateForm() {
  let isValid = form.checkValidity();
  console.log("Form validity: ", isValid);
  submitBtn.disabled = !isValid;

  // Дополнительный вывод для отладки
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      console.log(`Invalid field: ${input.name}, value: ${input.value}`);
    }
  });
}

inputs.forEach((input) => {
  input.addEventListener("input", validateForm);
  input.addEventListener(
    "focus",
    () => (input.style.border = "2px solid blue")
  );
  input.addEventListener("blur", () => (input.style.border = ""));
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = false;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  if (!form.name.checkValidity()) {
    document.getElementById("nameError").textContent =
      "Please enter a valid name";
    errors = true;
  }
  if (!form.email.checkValidity()) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    errors = true;
  }
  if (!form.age.checkValidity()) {
    document.getElementById("ageError").textContent =
      "Please enter a valid age";
    errors = true;
  }
  if (!form.profession.checkValidity()) {
    document.getElementById("professionError").textContent =
      "Please choose a profession";
    errors = true;
  }
  if (!form.password.checkValidity()) {
    document.getElementById("passwordError").textContent =
      "Please enter a valid password";
    errors = true;
  }
  if (!form.agreement.checked) {
    document.getElementById("agreementError").textContent =
      "Please agree to the terms and conditions";
    errors = true;
  }

  if (!errors) {
    console.log({
      name: form.name.value,
      email: form.email.value,
      age: form.age.value,
      gender: form.gender.value,
      profession: form.profession.value,
      password: form.password.value,
    });
    form.reset();
    validateForm();
  }
});

validateForm();
