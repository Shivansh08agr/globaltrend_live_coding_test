const form = document.getElementById('signUpForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');

const emailError = document.getElementById('emailError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

emailInput.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        submitBtn.disabled = true;
    } else {
        emailError.style.display = 'none';
        checkFormValidity();
    }
});

confirmPasswordInput.addEventListener('input', () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.style.display = 'block';
        submitBtn.disabled = true;
    } else {
        confirmPasswordError.style.display = 'none';
        checkFormValidity();
    }
});

form.addEventListener('input', checkFormValidity);

function checkFormValidity() {
    if (form.checkValidity() && emailError.style.display === 'none' && confirmPasswordError.style.display === 'none') {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}