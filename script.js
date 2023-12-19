
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCe-4N7QNe4ri72y-Rf0m7Ziz5DF92KW1s",
//     authDomain: "music-management-store.firebaseapp.com",
//     projectId: "music-management-store",
//     storageBucket: "music-management-store.appspot.com",
//     messagingSenderId: "54477178868",
//     appId: "1:54477178868:web:bb56d97ce1fb6f3a459ba1",
//     measurementId: "G-M9B2F92GR8"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();
//   const database = firebase.database();
  
//   // Function to register a new user
//   function register() {
//       const email = document.getElementById('registerEmail').value;
//       const password = document.getElementById('registerPassword').value;
  
//       // Validation logic here...
  
//       auth.createUserWithEmailAndPassword(email, password)
//           .then((userCredential) => {
//               // Handle successful registration
//               const user = userCredential.user;
//               // Add user data to database or perform other actions
//               // ...
//               alert('User Created!!');

//           })
//           .catch((error) => {
//               // Handle registration errors
//               const errorCode = error.code;
//               const errorMessage = error.message;
//               alert(errorMessage);
//           });
//   }
  
//   // Function to log in an existing user
//   function login() {
//       const email = document.getElementById('loginEmail').value;
//       const password = document.getElementById('loginPassword').value;
  
//       // Validation logic here...
  
//       auth.signInWithEmailAndPassword(email, password)
//           .then((userCredential) => {
//               // Handle successful login
//               const user = userCredential.user;
//               // Update last login time or perform other actions
//               // ...
//               alert('User Logged In!!');
//           })
//           .catch((error) => {
//               // Handle login errors
//               const errorCode = error.code;
//               const errorMessage = error.message;
//               alert(errorMessage);
//           });
//   }
  