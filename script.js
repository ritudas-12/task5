document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const ageError = document.getElementById("ageError");
    const addFieldButton = document.getElementById("addFieldButton");
    const additionalFields = document.getElementById("additionalFields");

    // Form validation
    form.addEventListener("submit", function(event) {
        let valid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameError.style.display = "block";
            valid = false;
        } else {
            nameError.style.display = "none";
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required.";
            emailError.style.display = "block";
            valid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = "Email is not valid.";
            emailError.style.display = "block";
            valid = false;
        } else {
            emailError.style.display = "none";
        }

        if (ageInput.value.trim() === "" || ageInput.value <= 0) {
            ageError.textContent = "Age must be a positive number.";
            ageError.style.display = "block";
            valid = false;
        } else {
            ageError.style.display = "none";
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Adding dynamic fields
    addFieldButton.addEventListener("click", function() {
        const newField = document.createElement("div");
        newField.innerHTML = `
            <label for="extraField">Extra Field:</label>
            <input type="text" name="extraField" class="extraField">
        `;
        additionalFields.appendChild(newField);
    });
});