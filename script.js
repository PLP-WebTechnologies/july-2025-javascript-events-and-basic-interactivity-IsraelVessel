// script.js

// Interactive Counter Section
const counterValueElem = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

let counter = 0;

// Updates the displayed counter value
function updateCounter() {
    counterValueElem.textContent = counter;
}

// Event listener for increment button: increases counter by 1
incrementBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

// Event listener for decrement button: decreases counter by 1
decrementBtn.addEventListener('click', () => {
    counter--;
    updateCounter();
});

// Initial display update
updateCounter();

// Color Changer Section
const colorInput = document.getElementById('color-input');
const changeColorBtn = document.getElementById('change-color-btn');
const colorDisplay = document.getElementById('color-display');

// Function to validate color input and apply it as background color
function changeColor() {
    const input = colorInput.value.trim();
    if (!input) {
        alert('Please enter a color name or hex code.');
        return;
    }

    // Create a temporary element to test if color is valid
    const testElem = document.createElement('div');
    testElem.style.color = input;
    if (testElem.style.color === '') {
        alert('Invalid color entered. Please try again.');
        return;
    }

    // Change the background of the display box
    colorDisplay.style.backgroundColor = input;
}

// Event listener for Change Color button click
changeColorBtn.addEventListener('click', changeColor);

// Custom Form Validation Section
const form = document.getElementById('custom-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const ageInput = document.getElementById('age-input');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const ageError = document.getElementById('age-error');

const formSuccessMessage = document.getElementById('form-success-message');

// Helper function: validate name - only letters and spaces allowed
function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

// Helper function: validate email using basic regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function: validate age - if provided, must be between 1 and 120
function validateAge(age) {
    if (age === '') return true; // optional field
    const ageNumber = Number(age);
    return Number.isInteger(ageNumber) && ageNumber >= 18 && ageNumber <= 100;
}

// Clear all error messages
function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    ageError.textContent = '';
    formSuccessMessage.textContent = '';
}

// Main form validation function
function validateForm() {
    clearErrors();

    let valid = true;

    // Validate name
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else if (!validateName(nameInput.value.trim())) {
        nameError.textContent = 'Name can only contain letters and spaces.';
        valid = false;
    }

    // Validate email
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate age
    if (!validateAge(ageInput.value.trim())) {
        ageError.textContent = 'Age, if entered, must be an integer between 18 and 100.';
        valid = false;
    }

    return valid;
}

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission
    
    if (validateForm()) {
        formSuccessMessage.textContent = 'Form submitted successfully!';
        // Here you can add further logic to process form data if needed
        form.reset();
    }
});
