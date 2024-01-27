const passwordInput = document.querySelector('#password');
const passwordRequirements = document.querySelector('#passwordRequirements');
const charRequirementSpan = document.querySelector('#charRequirement');
const numberRequirementSpan = document.querySelector('#numberRequirement');
const specialCharacterRequirementSpan = document.querySelector('#specialCharacterRequirement');

passwordInput.addEventListener('focus', () => {
    passwordRequirements.classList.remove('hidden');
});

passwordInput.addEventListener('blur', () => {
    passwordRequirements.classList.add('hidden');
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    // Verificar si la contraseña contiene al menos 1 letra
    charRequirementSpan.textContent = password.match(/[a-zA-Z]/) ? '✔' : '✘';
    charRequirementSpan.className = password.match(/[a-zA-Z]/) ? 'green' : 'red';

    // Verificar si la contraseña contiene al menos 1 número
    numberRequirementSpan.textContent = password.match(/\d/) ? '✔' : '✘';
    numberRequirementSpan.className = password.match(/\d/) ? 'green' : 'red';

    // Verificar si la contraseña contiene al menos 1 arroba (@)
    specialCharacterRequirementSpan.textContent = password.includes('@') ? '✔' : '✘';
    specialCharacterRequirementSpan.className = password.includes('@') ? 'green' : 'red';
});