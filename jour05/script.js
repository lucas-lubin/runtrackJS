document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nomInput = document.querySelector('input[name="nom"]');
    const prenomInput = document.querySelector('input[name="prenom"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const adresseInput = document.querySelector('input[name="adresse"]');
    const codePostalInput = document.querySelector('input[name="code_postal"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        // Vérification du nom
        if (nomInput.value === '') {
            isValid = false;
            displayErrorMessage(nomInput, 'Veuillez saisir votre nom.');
        }

        // Vérification du prénom
        if (prenomInput.value === '') {
            isValid = false;
            displayErrorMessage(prenomInput, 'Veuillez saisir votre prénom.');
        }

        // Vérification de l'email
        if (emailInput.value === '' || !isValidEmail(emailInput.value)) {
            isValid = false;
            displayErrorMessage(emailInput, 'Adresse email invalide.');
        }

        // Vérification du mot de passe
        if (passwordInput.value === '' || passwordInput.value.length < 8) {
            isValid = false;
            displayErrorMessage(passwordInput, 'Le mot de passe doit contenir au moins 8 caractères.');
        }

        // Vérification de l'adresse
        if (adresseInput.value === '') {
            isValid = false;
            displayErrorMessage(adresseInput, 'Veuillez saisir votre adresse.');
        }

        // Vérification du code postal
        if (codePostalInput.value === '' || !(/^\d+$/.test(codePostalInput.value))) {
            isValid = false;
            displayErrorMessage(codePostalInput, 'Code postal invalide.');
        }

        return isValid;
    }

    function displayErrorMessage(input, message) {
        const userBox = input.parentElement;
        const errorMessage = userBox.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = message;
        } else {
            const newErrorMessage = document.createElement('div');
            newErrorMessage.className = 'error-message';
            newErrorMessage.textContent = message;
            userBox.appendChild(newErrorMessage);
        }
    }

    function isValidEmail(email) {
        // Fonction de validation d'email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});