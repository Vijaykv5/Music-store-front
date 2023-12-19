// Correct case
// Import the auth instance from firebaseConfig.js

// Get references to elements or perform authentication-related actions
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login form');
    const registerForm = document.querySelector('.register form');

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Handle successful login
                const user = userCredential.user;
                // Redirect or perform actions for logged-in user
                console.log('Logged in:', user);
            })
            .catch((error) => {
                // Handle login errors
                const errorCode = error.code;
                const errorMessage = error.message;
                // Display error message to the user
                console.error(errorMessage);
            });
    });

    // Handle registration form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = registerForm.querySelector('input[type="text"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Handle successful registration
                const user = userCredential.user;
                // Redirect or perform actions for registered user
                console.log('Registered:', user);
            })
            .catch((error) => {
                // Handle registration errors
                const errorCode = error.code;
                const errorMessage = error.message;
                // Display error message to the user
                console.error(errorMessage);
            });
    });
});
