var firebaseConfig = {
  apiKey: "AIzaSyD2kaMkrUSMF7xBm0UN0tYWdr5bE3JlZ6Y",
  authDomain: "dbms--music.firebaseapp.com",
  projectId: "dbms--music",
  storageBucket: "dbms--music.appspot.com",
  messagingSenderId: "40044824261",
  appId: "1:40044824261:web:9cacf3d3086adf160112ac",
  measurementId: "G-6DYJF6S7T3",
  databaseURL: "https://dbms--music-default-rtdb.firebaseio.com/" // Add this line with your database URL
};

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const database = firebase.database();

function showToast(message) {
  Toastify({
    text: message,
    duration: 3000, // Duration in milliseconds
    close: true,
    gravity: 'top', // 'top' or 'bottom'
    position: 'right',
    backgroundColor:'green' , // 'left', 'center' or 'right'
  }).showToast();
}

function register() {
  var name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  var newEmail = document.getElementById("newEmail").value;
  var newPassword = document.getElementById("newPassword").value;

  firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
      .then((userCredential) => {
          // Registration successful
          var user = userCredential.user;
          console.log('User registered:',  userCredential);
          showToast('Successfully registered!');
          setTimeout(() => {
            window.location.href = "head.html"; // Replace "home.html" with your actual home page URL
          }, 3000);
          // Additional logic after successful registration if needed
      })
      .catch((error) => {
          // Handle errors during registration
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error('Registration error:', errorCode, errorMessage);
          // Display error message to the user or handle accordingly
      });
}

//login
// function login() {
//   var email = document.getElementById("newEmail").value; // Assuming your login form has an input field with id="email"
//   var password = document.getElementById("newPassword").value; // Assuming your login form has an input field with id="password"

//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Login successful
//       var user = userCredential.user;
//       console.log('User logged in:', user);
//       showToast('Successfully logged in!');
//       setTimeout(() => {
//         window.location.href = "head.html"; // Replace "head.html" with your actual redirect URL after login
//       }, 3000);
//       // Additional logic after successful login if needed
//     })
//     .catch((error) => {
//       // Handle errors during login
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.error('Login error:', errorCode, errorMessage);
//       // Display error message to the user or handle accordingly
//     });
// }




// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent default form submission
//   login(); // Call your login function
// });




  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    register(); // Call your registration function
});


