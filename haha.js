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
  const database = firebase.database();
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const songsRef = database.ref('Songs/Malayalam');
  
    songsRef.once('value', snapshot => {
      const songsData = snapshot.val();
  
      for (const key in songsData) {
        if (songsData.hasOwnProperty(key)) {
          const song = songsData[key];
        //   setupPlayButton(key, song);
          
          const songId = `song${key}`;
          const songTitleElement = document.getElementById(songId);
          const songAuthorElement = document.getElementById(`author${key}`);
          const imageElement = document.getElementById(`image${key}`);
  
          if (songTitleElement && songAuthorElement && imageElement) {
            songTitleElement.textContent = song.songName || 'Unknown Song';
            songAuthorElement.textContent = song.author || 'Unknown Author';
            imageElement.src = song.img || 'default_image_url.jpg';
          } else {
            console.log(`Elements not found for song${key}`);
          }
        }
      }
    }, error => {
      console.error('There was a problem fetching the data:', error);
    });
  });


//   function setupPlayButton(key, song) {
//     const playButton = document.querySelector(`#image${key} + .play .fa-play`);
  
//     playButton.addEventListener('click', () => {
//       // Play the song associated with this button
//       console.log('hi'); // Display 'hi' in the console
//       // Your logic to play the song goes here
//     });
//   }
  



document.addEventListener('DOMContentLoaded', function() {
    // Check if the user name exists in local storage
    const userName = localStorage.getItem('name');
  
    // If the user name exists, update the login button's text
    if (userName) {
      const loginButton = document.querySelector('.navbar button');
      loginButton.textContent = `Welcome, ${userName}`; // Set the user name in place of 'Log In'
    }
  });
  

