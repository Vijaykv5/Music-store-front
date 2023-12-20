var firebaseConfig = {
  apiKey: "AIzaSyD2kaMkrUSMF7xBm0UN0tYWdr5bE3JlZ6Y",
  authDomain: "dbms--music.firebaseapp.com",
  projectId: "dbms--music",
  storageBucket: "dbms--music.appspot.com",
  messagingSenderId: "40044824261",
  appId: "1:40044824261:web:9cacf3d3086adf160112ac",
  measurementId: "G-6DYJF6S7T3",
  databaseURL: "https://dbms--music-default-rtdb.firebaseio.com/" 
};

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const database = firebase.database();

function showToast(message,isError = false) {
  Toastify({
    text: message,
    duration: 3000, 
    close: true,
    gravity: 'top', 
    position: 'right',
    backgroundColor: isError ? 'green' : 'red' , 
  }).showToast();
}


function register() {
  var name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  var newEmail = document.getElementById("newEmail").value;
  var newPassword = document.getElementById("newPassword").value;

  firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
      .then((userCredential) => {
        
          var user = userCredential.user;
          console.log('User registered:',  userCredential);
          showToast('Successfully registered!',true);
          setTimeout(() => {
            window.location.href = "main.html"; 
          }, 3000);
         
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error('Registration error:', errorMessage);
          showToast(errorMessage,false);
          
      });
}
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newEmail1').value;
  const password = document.getElementById('newPassword1').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Logged in:', userCredential);
      showToast('Successfully logged In!',true);
          setTimeout(() => {
            window.location.href = "main.html"; 
          }, 3000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (error?.code === 'auth/internal-error') {
        const firebaseError = JSON.parse(error?.message);
        const firebaseErrorMessage = firebaseError?.error?.errors[0]?.message || errorMessage;
        showToast(firebaseErrorMessage);
        console.error('Firebase Error:', firebaseErrorMessage);
      } else {
        showToast(errorMessage,true);
        console.error('Error:', errorMessage);
      }
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    register(); 
});


